import AuthButtons from "./AuthButtons";
import Menu from "./Menu";
import { ThemeToggle } from "./ThemeToggle";

export default function NavButtons() {
  return (
    <>
      <div className="hidden md:flex items-center gap-x-5 transition-all">
        <AuthButtons />
        <ThemeToggle />
      </div>
      <div className="block md:hidden">
        <Menu />
      </div>
    </>
  );
}
