import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/button";
import { ArrowUpRight, Bell, Heart, Search } from "lucide-react";
import Input from "@/components/input";

const Header = () => {
  return (
    <header className="border-b border-solid border-slate-200 bg-background px-6 py-4 shadow-sm sm:px-10">
      <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4">
        <div className="flex flex-row gap-8 sm:col-span-2">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/logo.svg"
              width={60}
              height={40}
              alt="Quick Rent"
              priority
            />
          </Link>
          <Input
            type="search"
            name="search"
            id="search"
            containerClassName="hidden w-full sm:flex"
            placeholder="Search cars"
            LeftIcon={(props) => <Search {...props} />}
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-4 sm:gap-5">
          <Button variant="icon" href="#">
            <Heart size={24} strokeWidth={1.5} />
          </Button>
          <Button variant="icon" href="#">
            <Bell size={24} strokeWidth={1.5} />
          </Button>
          <Button variant="link" href="#" className="gap-0.5">
            Login{" "}
            <ArrowUpRight
              // strokeWidth={1.5}
              size={16}
              className="text-indigo-400"
            />
          </Button>
        </div>
        <Input
          type="search"
          name="search"
          id="search"
          containerClassName="col-span-2 sm:hidden"
          placeholder="Search cars"
          LeftIcon={(props) => <Search {...props} />}
        />
      </div>
    </header>
  );
};

export default Header;
