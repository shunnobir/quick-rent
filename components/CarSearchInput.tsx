"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/input";
import { Search } from "lucide-react";
import { useFilters } from "@/hooks/useFilters";
import { cn } from "@/lib/utils";

const CarSearchInput = ({ className }: { className?: string }) => {
  const { filters, setFilters } = useFilters();
  const [search, setSearch] = useState(filters.search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (filters.search !== search)
        setFilters((prev) => ({ ...prev, search }));
    }, 350);

    return () => clearTimeout(timeout);
  }, [filters.search, search, setFilters]);

  useEffect(() => {
    if (filters.search !== search) setSearch(filters.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.search]);

  return (
    <Input
      type="search"
      name="search"
      id="search"
      containerClassName={cn(className)}
      placeholder="Search cars"
      LeftIcon={(props) => <Search {...props} />}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default CarSearchInput;
