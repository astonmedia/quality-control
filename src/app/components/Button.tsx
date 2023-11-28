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
      className="bg-slate-700 mt-6 h-32 border border-white shadow-lg shadow-slate-700 hover:bg-slate-600 hover:shadow-lg hover:shadow-cyan-700"
    >
      <div className="flex h-full justify-center items-center">
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default Button;
