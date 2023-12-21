import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex flex-col gap-5", className)} {...props}>
      <Link
        href="/dashboard"
        className="font-medium transition-colors hover:text-primary flex items-center justify-start gap-3 text-lg"
      >
        <Image
          src="/assets/icons/dashboard.svg"
          alt="Dashboard"
          width={30}
          height={30}
        />
        Overview
      </Link>
      <Link
        href="/dashboard/patients"
        className="font-medium text-muted-foreground transition-colors hover:text-primary flex items-center justify-start gap-3 text-lg"
      >
        <Image
          src="/assets/icons/patients.svg"
          alt="patients"
          width={30}
          height={30}
        />
        Patients
      </Link>
      <Link
        href="/dashboard/glasses"
        className="font-medium text-muted-foreground transition-colors hover:text-primary flex items-center justify-start gap-3 text-lg"
      >
        <Image
          src="/assets/icons/eyeglass.svg"
          alt="eyeglass"
          width={30}
          height={30}
        />
        Glasses
      </Link>
      <Link
        href="/dashboard/settings"
        className="font-medium text-muted-foreground transition-colors hover:text-primary flex items-center justify-start gap-3 text-lg"
      >
        <Image
          src="/assets/icons/settings.svg"
          alt="settings"
          width={30}
          height={30}
        />
        Settings
      </Link>
    </nav>
  );
}
