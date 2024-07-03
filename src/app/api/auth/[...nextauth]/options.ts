import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
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
          const user = {
            id: "2",
            name: "Abebe",
            email: "abebe@gmail.com",
            password: "password",
          };
  
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

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if (account?.provider === "github" || account?.provider === "google") {
  //       return true; // Allow GitHub and Google sign-in
  //     } else if (account?.provider === "credentials") {
  //       return user !== null; // Allow credentials sign-in if user is valid
  //     }
  //     return false;
  //   },
  // },
    pages: {
      signIn: "/auth/signin",
    },
  debug: true,
};
