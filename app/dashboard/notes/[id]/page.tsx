import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

const getData = async ({
  userId,
  noteId,
}: {
  userId: string;
  noteId: string;
}) => {
  noStore();

  const data = await prisma.note.findUnique({
    where: {
      id: noteId,
      userId: userId,
    },
    select: {
      title: true,
      description: true,
      id: true,
    },
  });

  return data;
};

const DynamicRoute = async ({ params }: { params: { id: string } }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData({ userId: user?.id as string, noteId: params.id });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            {data?.title}
            <Link href={`/dashboard/new/${data?.id}`}>
              <Button variant="outline" size="icon">
                <Edit className="w-4 h-4" />
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>{data?.description}</CardContent>
      </Card>
    </div>
  );
};

export default DynamicRoute;
