import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Next.js Project Management | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin"); // redirect("/auth/signin");
  } else {
    redirect("/admin")
  }

  return null;
}
