"use client";

import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { DoorClosedIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";
import { navItems } from "./DashboardNav";

export default function UserNavMobile({
  userImage,
  name,
  email,
}: {
  userImage: string;
  name: string;
  email: string;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col">
        {/*  */}
        <div className="flex items-center gap-4">
          <Image
            src={userImage}
            alt="user"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-medium leading-none">{name}</p>
            <p className="mt-1 leading-none text-muted-foreground">{email}</p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-foreground/10 my-5"></div>

        {/* links */}
        <div className="flex flex-col gap-5 w-fit">
          {navItems.map((item, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={item.href}
                className={cn(
                  "w-full flex justify-start items-center gap-2 cursor-pointer font-medium hover:bg-accent py-2 px-4 rounded-lg",
                  pathname === item.href ? "bg-accent" : ""
                )}
              >
                <item.icon className="h-5 w-5 mb-0.5 text-primary" />
                <h1 className="text-lg">{item.name}</h1>
              </Link>
            </SheetClose>
          ))}
        </div>

        <div className="h-[1px] w-full bg-foreground/10 my-5"></div>

        {/* logout btn */}
        <SheetClose>
          <LogoutLink className="flex items-center gap-2 w-fit px-4 py-2 hover:bg-accent rounded-lg">
            <DoorClosedIcon className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-medium">Logout</h1>
          </LogoutLink>
        </SheetClose>
      </div>
    </div>
  );
}
