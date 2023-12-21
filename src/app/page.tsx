import Login from "@/components/Login";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-20 max-w-3xl mx-auto text-center flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/the-look-optical-logo.png"
            alt="The Look Optical Stock Management System"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl sm:text-6xl tracking-tight font-bold text-gray-800">
          Your Inventory Management{" "}
          <span className="text-green-600">Simplified.</span>
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to The Look Optical Stock Management System. Manage your
          patients records, inventory as well as your glasses stock with ease.
        </p>

        <div className="w-full border-t-2 border-gray-100 mt-10">
          <h1 className="text-lg sm:text-3xl tracking-tight font-bold text-gray-800 mt-10">
            Log into Your <span className="text-green-600"> Account. </span>
          </h1>
          <Login />
        </div>
      </div>
    </PageContainer>
  );
}
