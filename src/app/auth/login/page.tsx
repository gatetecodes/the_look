import Login from "@/components/Login";
import React from "react";

const page = () => {
  return (
    <div className="py-20 max-w-3xl mx-auto text-center flex-col items-center">
      <h1 className="text-lg sm:text-3xl tracking-tight font-bold text-gray-800">
        Log into Your <span className="text-green-600"> Account. </span>
      </h1>
      <Login />
    </div>
  );
};

export default page;
