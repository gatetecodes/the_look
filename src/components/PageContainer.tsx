import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl mx-auto w-full px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
