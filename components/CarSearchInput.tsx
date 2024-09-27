"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const CarSearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        e.stopPropagation();
        router.push(`/cars/?search=${search}`);
        break;
      default:
        break;
    }
  };

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
      onKeyDown={handleKeyDown}
    />
  );
};

export default CarSearchInput;
