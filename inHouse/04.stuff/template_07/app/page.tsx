"use client";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import SuspenseBox from "./components/page/SuspenseBox";
export default function Home() {
  return (
    <RecoilRoot>
      <Suspense fallback={<SuspenseBox />}>
        <div className="w-full h-full flex justify-center">
          <Sidebar />
          <Hero />
        </div>
      </Suspense>
    </RecoilRoot>
  );
}
