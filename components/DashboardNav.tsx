"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2">
      <div className="">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md mb-2 px-4 py-4 text-xl font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300",
                pathname === item.href ? "bg-accent" : "bg-transparent"
              )}
            >
              <item.icon className="mr-2 mb-0.5 h-5 w-5 text-primary" />
              <span>{item.name}</span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;

export const navItems = [
  {
    name: "Dashboard",
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
