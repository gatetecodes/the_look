"use client";
import React from "react";
import { Button } from "../ui/button";

const LogoutButton = ({ signOut }: { signOut: any }) => {
  return (
    <Button
      type="button"
      className="bg-transparent text-gray-700 p-0 h-0"
      onClick={signOut}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
