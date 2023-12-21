import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const db = new PrismaClient();

const userSeed = async () => {
  try {
    const hashPassword = await hash(
      process.env.SUPER_ADMIN_PASSWORD as string,
      10
    );

    const superAdmin = await db.user.upsert({
      where: {
        email: process.env.SUPER_ADMIN_EMAIL,
      },
      update: {},
      create: {
        name: process.env.SUPER_ADMIN_NAME as string,
        email: process.env.SUPER_ADMIN_EMAIL as string,
        password: hashPassword,
        role: "SUPER_ADMIN",
      },
    });
    console.log(superAdmin);
    console.log("Super Admin seeded");
  } catch (error) {
    console.log(error);
    await db.$disconnect();
    process.exit(1);
  }
};

userSeed();
