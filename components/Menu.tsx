import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { LoginButton, RegisterButton } from "./AuthButtons";
import { ThemeToggle } from "./ThemeToggle";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-5">
          <LoginButton />
          <RegisterButton />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
