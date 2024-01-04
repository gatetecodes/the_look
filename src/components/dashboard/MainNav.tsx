"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  GlassesIcon,
  LayoutDashboard,
  UserSquareIcon,
  Settings2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const MainNavLinks = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: <LayoutDashboard size={30} />,
  },
  {
    name: "Patients",
    path: "/dashboard/patients",
    icon: <UserSquareIcon size={30} />,
  },
  {
    name: "Glasses",
    path: "/dashboard/glasses",
    icon: <GlassesIcon size={30} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings2Icon size={30} />,
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-5", className)} {...props}>
      {MainNavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={cn(
            "font-medium transition-colors flex items-center justify-start gap-3 text-lg",
            pathname === link.path && "text-primary"
          )}
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
