import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your passwod",
        },
      },
      async authorize(credentials) {
        const user = { id: "2", name: "Abebe", email:"abebe@gmail.com", password: "password" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  debug: true,
//   pages: {
//     signIn: "/auth/signin",
//   }
};
