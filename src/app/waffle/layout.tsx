"use client";
import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ReactNode } from "react";

import MainLayout from "@/components/layout/mainLayout";
import { store } from "@/store";

interface WaffleLayoutProps {
  children: ReactNode;
}

const WaffleLayout = ({ children }: WaffleLayoutProps) => {
  return (
    <>
      {/* <ReduxProvider store={store}> */}
      <MainLayout>{children}</MainLayout>
      {/* </ReduxProvider> */}
    </>
  );
};

export default WaffleLayout;
