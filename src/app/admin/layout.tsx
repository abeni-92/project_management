import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options)

  if (!session) {
      redirect('/api/auth/signin?callbackUrl=/admin')
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
