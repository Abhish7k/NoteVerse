/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { LoginButton, RegisterButton } from "./AuthButtons";
import { ThemeToggle } from "./ThemeToggle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNavMobile from "./UserNavMobile";

export default async function Menu() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  const userImage = user?.picture as string;
  const name = user?.given_name as string;
  const email = user?.email as string;

  console.log(userImage, name);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {(await isAuthenticated()) ? (
          <UserNavMobile userImage={userImage} name={name} email={email} />
        ) : (
          <div className="flex flex-col gap-10">
            <ThemeToggle />
            <div className="flex flex-col gap-4">
              <LoginButton />
              <RegisterButton />
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
