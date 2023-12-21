import NextAuth from "next-auth";
declare module "next-auth" {
  interface User {
    id: string;
    email: string | null;
    name: string;
    role: string;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
    token: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }
}
