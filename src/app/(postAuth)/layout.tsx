"use client";

import TopNav from "@/util/tapnav";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
}
