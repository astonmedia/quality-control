"use client";
import { useState, useEffect } from "react";

type Props = {
  selectedValue: string;
  selection: string;
};

function Card({ selectedValue, selection }: Props) {
  const [isRunning, setIsRunning] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isRunning) {
      setValue(selectedValue);
    }
  }, [isRunning, selectedValue]);

  return (
    <div className="flex flex-col">
      <div
        className={
          isRunning
            ? "block max-w-sm p-6 bg-white border border-signet_yellow rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-signet_yellow dark:hover:bg-gray-700 shadow-md hover:shadow-signet_yellow"
            : "block max-w-sm p-6 bg-white border border-signet_yellow rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-red-600 dark:hover:bg-gray-700 hover:shadow-signet_yellow"
        }
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {selection}
        </h5>
        <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Card;
