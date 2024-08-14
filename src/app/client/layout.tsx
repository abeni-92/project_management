import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/pages/api/auth/options";

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options)

  if (!session) {
      redirect('/api/auth/signin?callbackUrl=/client')
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
