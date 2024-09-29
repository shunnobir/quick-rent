import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <main className="mx-auto flex max-w-[1220px] flex-1 flex-col items-center justify-center gap-5 px-5 py-[100px]">
      <h1 className="mx-auto text-center text-2xl font-black text-indigo-600 sm:text-4xl">
        🎉 Successfully Rented!
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center">
          Your car rental process was successful. Your ride will arrive 5minutes
          before your pick-up time.
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

export default SuccessPage;
