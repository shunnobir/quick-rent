import Button from "@/components/button";
import { ArrowUpRight, Bell, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CarSearchInput from "../CarSearchInput";
import Skeleton from "../skeleton";
import Tooltip from "../tooltip";

const Header = () => {
  return (
    <header className="border-b border-solid border-slate-200 bg-background px-5 py-4 shadow-sm sm:px-10">
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
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <CarSearchInput className="hidden w-full sm:flex" />
          </Suspense>
        </div>
        <div className="flex flex-row items-center justify-end gap-4 sm:gap-5">
          <Tooltip tooltipContent="Page not yet implemented">
            <Button variant="icon" href="#">
              <Heart size={24} strokeWidth={1.5} />
            </Button>
          </Tooltip>
          <Tooltip tooltipContent="Page not yet implemented">
            <Button variant="icon" href="#">
              <Bell size={24} strokeWidth={1.5} />
            </Button>
          </Tooltip>
          <Tooltip tooltipContent="Page not yet implemented">
            <Button variant="link" href="#" className="gap-0.5">
              Login <ArrowUpRight size={16} className="text-indigo-400" />
            </Button>
          </Tooltip>
        </div>
        <Suspense fallback={<Skeleton className="h-10 w-full" />}>
          <CarSearchInput className="col-span-2 sm:hidden" />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
