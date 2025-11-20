import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface User {
    role: "ADMIN" | "CUSTOMER";
  }
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      image?: string;
      role: "ADMIN" | "CUSTOMER";
    };
  }

  interface JWT {
    id: string;
    username: string;
    email: string;
    picture?: string;
  }
}

export const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        try {
          const prisma = (await import("./lib/prisma")).default;
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          if (
            !user ||
            !user.password ||
            !(await bcrypt.compare(
              credentials.password as string,
              user.password,
            ))
          ) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!account || !user) return false;

      if (account.provider === "google" || account.provider === "github") {
        try {
          const prisma = (await import("./lib/prisma")).default;

          // Check if user already exists
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email! },
          });

          if (!existingUser) {
            // Create new user for OAuth sign-in
            await prisma.user.create({
              data: {
                email: user.email!,
                name: user.name || "",
                image: user.image || null,
                role: user.role,
              },
            });
          }
        } catch (error) {
          console.error("Error creating OAuth user:", error);
          return false;
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
        session.user.image = token.picture as string | undefined;
        session.user.role = token.role as "ADMIN" | "CUSTOMER";
      }
      return session;
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      } else if (
        account &&
        (account.provider === "google" || account.provider === "github")
      ) {
        // For OAuth, fetch the user from database to get the id
        try {
          const prisma = (await import("./lib/prisma")).default;
          const dbUser = await prisma.user.findUnique({
            where: { email: token.email! },
          });
          if (dbUser) {
            token.id = dbUser.id;
            token.name = dbUser.name || "";
            token.role = dbUser.role;
          }
        } catch (error) {
          console.error("Error fetching user in JWT callback:", error);
        }
      }
      return token;
    },
  },
};
