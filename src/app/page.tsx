"use client";
import Input from "./components/Input";
import Sidenav from "./components/Sidenav";
import { LineChart } from "./components/LineChart";
import { useState } from "react";
import { checks } from "@/data/checks";

export default function Home() {
  const [test, setTest] = useState("Strength Test");
  const [machine, setMachine] = useState("Amutec");
  const [operator, setOperator] = useState("Ricky Aston");
  const [job, setJob] = useState("305255");
  const [batch, setBatch] = useState("79806");

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
                <Input selection="Selected Machine" selectedValue={machine} />
                <Input selection="Current Operator" selectedValue={operator} />
                <Input selection="Current Job" selectedValue={job} />
                <Input selection="Last Test Completed" selectedValue={test} />
                <Input selection="Batch Number" selectedValue={batch} />
              </div>
              <div className="flex">
                {checks.map((check) => (
                  <p key={check.id}>{check.id}</p>
                ))}
              </div>
            </div>
            <div className="h-1/2 w-3/4 bg-slate-400 mx-auto">
              <LineChart titleText={test} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
