import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import GetStartedButton from "./GetStartedButton";

export default async function HeroSectionCta() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className="flex justify-center max-w-sm mx-auto mt-10">
      {(await isAuthenticated()) ? (
        <Link href="/dashboard">
          <Button size="lg">
            Go to your Dashboard
            <span>
              <ChevronRight className="h-5 w-5" />
            </span>
          </Button>
        </Link>
      ) : (
        <GetStartedButton />
      )}
    </div>
  );
}
