import { Metadata } from "next";
import SignIn from "./auth/signin/page";

export const metadata: Metadata = {
  title: "Next.js Project Management | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
