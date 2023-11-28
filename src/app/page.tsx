"use client";
import Input from "./components/Input";
import Sidenav from "./components/Sidenav";
import { LineChart } from "./components/LineChart";
import { useState } from "react";

export default function Home() {
  const [test, setTest] = useState("Leak Test");
  return (
    <main className="">
      <div className="grid grid-cols-10">
        <div>
          <Sidenav />
        </div>
        <div className="col-span-9 pt-10 mx-6">
          <div className="flex flex-col h-screen justify-between pb-20">
            <div className=" flex flex-col">
              <div className="flex gap-4 justify-between">
                <Input selection="Selected Machine" selectedValue="Amutec" />
                <Input
                  selection="Current Operator"
                  selectedValue="Ricky Aston"
                />
                <Input selection="Current Job" selectedValue="305255" />
                <Input
                  selection="Last Test Completed"
                  selectedValue="Leak Test"
                />
              </div>
            </div>
            <div className="h-1/2 w-3/4 bg-slate-400 mx-auto">
              <LineChart chartTitle={test} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
