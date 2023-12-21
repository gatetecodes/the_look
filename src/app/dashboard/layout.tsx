import { MainNav } from "@/components/dashboard/MainNav";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex flex-col gap-10 lg:min-w-[15%] bg-slate-100 min-h-screen border-r-2 border-r-slate-200 px-6 pt-6">
        <Image
          src="/assets/the-look-logo-transparent.png"
          alt="Logo"
          width={150}
          height={40}
        />

        <MainNav className=" mx-0" />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
