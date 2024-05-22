import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  return (
    <nav className="h-[10vh] bg-background flex items-center border-b">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Notes
            <span>Nest</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <AuthButtons />

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
