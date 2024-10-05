import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { auth } from "./auth";

const prisma = new PrismaClient();
 
export default { providers: [Google, Credentials({
  name: 'credentials',
  credentials: {
    email: { label: 'email', type: 'text' },
    password: { label: 'password', type: 'password' },
  },
  authorize: async (credentials) => {
    if (!credentials?.email || !credentials?.password) {
      throw new Error('not found')
    }
    
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      }
    });

    if (!user || !user?.hashedPassword) {
      throw new Error('user not found');
    }
    const isCorrectPassword = await bcrypt.compare(
      credentials.password,
      user.hashedPassword,
    );

    if (!isCorrectPassword) {
      throw new Error('password');
    }

    return user;

    await auth();

    if () {
      
    }

  }, 
}) ] } satisfies NextAuthConfig;