"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const CarSearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => router.push(`/cars?search=${search}`),
      1000,
    );

    return () => clearInterval(interval);
  }, [search]);

  return (
    <Input
      type="search"
      name="search"
      id="search"
      containerClassName="hidden w-full sm:flex"
      placeholder="Search cars"
      LeftIcon={(props) => <Search {...props} />}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default CarSearchInput;
