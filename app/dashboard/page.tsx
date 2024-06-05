import prisma from "@/app/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrashDelete } from "@/components/SubmitButton";
import { revalidatePath } from "next/cache";

const getData = async (userId: string) => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Notes: true,
      Subscription: {
        select: {
          status: true,
        },
      },
    },
  });

  return data;
};

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id as string);

  async function deleteNote(formData: FormData) {
    "use server";

    const noteId = formData.get("noteId") as string;

    await prisma.note.delete({
      where: {
        id: noteId,
      },
    });

    revalidatePath("/dasboard");
  }

  return (
    <div className="grid items-start gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl font-semibold">Your Notes</h1>
        </div>
        {data?.Subscription?.status === "active" ? (
          <Button asChild>
            <Link href="/dashboard/new">Creata a new Note</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/dashboard/billing">Creata a new Note</Link>
          </Button>
        )}
      </div>

      {data?.Notes.length == 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <File className="w-10 h-10 text-primary" />
          </div>

          {data?.Subscription?.status === "active" ? (
            <div>
              <h2 className="mt-6 text-xl font-semibold">
                You dont have any notes created
              </h2>
              <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
                You currently dont have any notes. Please create some so that
                you can see them right here.
              </p>
              <Button asChild>
                <Link href="/dashboard/new">Create a new Note</Link>
              </Button>
            </div>
          ) : (
            <div>
              <h2 className="mt-6 text-xl font-semibold">
                You dont have any notes created
              </h2>
              <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
                You currently dont have any notes. Please subscribe to premium
                to create new notes.
              </p>
              <Button asChild>
                <Link href="/dashboard/billing">Please Upgrade to Premium</Link>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.Notes.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <Link href={`/dashboard/notes/${item.id}`}>
                  <h1 className="font-semibold text-xl text-primary hover:underline">
                    {item.title}
                  </h1>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(item.createdAt))}
                </p>
              </div>
              <div className="flex gap-x-4">
                <Link href={`/dashboard/new/${item.id}`}>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <form action={deleteNote}>
                  <input type="hidden" name="noteId" value={item.id} />
                  <TrashDelete />
                </form>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
