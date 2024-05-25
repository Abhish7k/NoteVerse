import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";

export const navItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
];

const DashboardNav = () => {
  return (
    <nav className="grid items-start gap-2">
      <div className="">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-2 py-4 text-xl font-medium hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="mr-2 h-5 w-5" />
              <span>{item.name}</span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;
