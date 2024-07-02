import { Metadata } from "next";
import SignIn from "./auth/signin/page";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Dashboard from "./_components/Dashboard/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Project Management | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin"); //redirect("/api/auth/signin?callbackUrl=/");
  } else {
    redirect("/admin")
  }

  return null;
}
