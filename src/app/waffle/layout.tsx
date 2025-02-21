import { ReactNode } from "react";

import MainLayout from "@/components/layout/mainLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface WaffleLayoutProps {
  children: ReactNode;
}

const WaffleLayout = async ({ children }: WaffleLayoutProps) => {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default WaffleLayout;
