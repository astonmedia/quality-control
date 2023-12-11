"use client";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

function Button({ title, href }: Props) {
  return (
    <Link
      href={`/${href}`}
      className="bg-gray-800 mt-6 h-32 border border-signet_yellow shadow-lg shadow-slate-700 rounded-lg hover:bg-gray-700 hover:shadow-md hover:shadow-signet_yellow"
    >
      <div className="flex h-full justify-center items-center">
        <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default Button;
