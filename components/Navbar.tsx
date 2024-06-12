import Link from "next/link";
import AuthButtons from "./AuthButtons";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="h-[10vh] bg-background flex items-center border-b">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Note
            <span className="text-primary">Verse</span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-x-5 transition-all">
          <AuthButtons />
          <ThemeToggle />
        </div>
        <div className="block md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
