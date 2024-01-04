"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      type="button"
      className="bg-transparent text-gray-700 p-0 h-0"
      onClick={async () => {
        await signOut({
          redirect: true,
          callbackUrl: "/",
        });
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
