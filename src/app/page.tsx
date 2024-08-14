import { options } from "@/pages/api/auth/options";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Next.js Project Management",
  description: "This is Next.js Project Management",
};

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin"); // redirect("/auth/signin");
  } else {
    redirect("/admin")
  }

  return null;
}
