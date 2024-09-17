import Image from "next/image";
import Link from "next/link";
import React from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import Separator from "@/components/separator";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-background px-5 pb-8 pt-8 text-foreground sm:px-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10">
        <Link href="/" className="inline-flex w-fit items-center gap-4">
          <Image
            src="/images/logo.svg"
            width={60}
            height={40}
            alt="Quick Rent"
            priority
          />
          <span className="text-2xl font-black uppercase leading-[100%]">
            Quick <span className="text-indigo-600">Rent</span>
          </span>
        </Link>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            <ul className="list-none space-y-4">
              <li className="w-fit text-lg font-semibold text-slate-500">
                Company
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">About</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Jobs</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Partnership</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Advertising</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Feedback</Link>
              </li>
            </ul>
            <ul className="list-none space-y-4">
              <li className="w-fit text-lg font-semibold text-slate-500">
                Explore
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Travel guide</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Hotels</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Resorts</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Parks</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Museum</Link>
              </li>
            </ul>
            <ul className="list-none space-y-4">
              <li className="w-fit text-lg font-semibold text-slate-500">
                Help
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Support</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Cancel your rental booking</Link>
              </li>
              <li className="w-fit text-sm text-slate-400 hover:text-indigo-600">
                <Link href="#">Refund policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold text-slate-500">
              Subscribe to our newsletter
            </span>
            <div className="flex flex-row flex-wrap gap-4">
              <Input
                // label="Subscribe to our newsletter"
                placeholder="Enter your email"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-row justify-center">
          <span className="text-center text-sm text-slate-400">
            @{new Date().getFullYear()}, Quick Rent. All rights are reserved.{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
