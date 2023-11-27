"use client";
import Link from "next/link";

type Props = {
  title: String;
  href: String;
};

function Button({ title, href }: Props) {
  return (
    <button className="mt-6 bg-slate-700 ml-2 h-24 border border-white shadow-lg shadow-slate-700 hover:bg-slate-600 hover:shadow-lg hover:shadow-cyan-700">
      <Link href={`/${href}`}>{title}</Link>
    </button>
  );
}

export default Button;
