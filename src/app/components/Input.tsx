"use client";
import { useState, useEffect } from "react";

type Props = {
  selectedValue: string;
  selection: string;
};

function Input({ selectedValue, selection }: Props) {
  const [isRunning, setIsRunning] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isRunning) {
      setValue(selectedValue);
    }
  }, [isRunning, selectedValue]);

  return (
    <div className="flex flex-col">
      <label className="text-xl text-white">{selection}</label>
      <input
        type="text"
        disabled
        value={value}
        className={
          isRunning
            ? "border-green-600 py-4 px-4 border-2  bg-slate-700  shadow-slate-700 hover:bg-slate-600 hover:shadow-lg hover:shadow-cyan-700"
            : "border-red-600 py-4 px-4 border-2  bg-slate-700  shadow-slate-700 hover:bg-slate-600 hover:shadow-lg hover:shadow-cyan-700"
        }
      />
    </div>
  );
}

export default Input;
