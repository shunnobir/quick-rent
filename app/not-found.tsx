import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="mx-auto flex max-w-[1220px] flex-1 flex-col items-center justify-center gap-5 px-5 py-8 pb-[100px]">
      <h1 className="mx-auto text-9xl font-black text-indigo-600">404</h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center">
          The page you are trying to browse is temporaliy unavailable or is not
          created yet.
        </p>
        <p>
          Go to{" "}
          <Link
            href="/"
            className="inline-flex flex-row items-center text-indigo-600"
          >
            Home <ArrowUpRight size={16} className="text-indigo-600" />
          </Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
