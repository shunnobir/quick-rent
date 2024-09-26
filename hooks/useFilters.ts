import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type SearchFilterType = {
  type: string[];
  capacity: string[];
  price: string[];
};

export const useFilters = () => {
  const [filters, setFilters] = useState<SearchFilterType>({
    type: [],
    capacity: [],
    price: [],
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.type.length > 0) params.set("type", filters.type.join(";"));
    else params.delete("type");

    if (filters.capacity.length > 0)
      params.set("capacity", filters.capacity.join(";"));
    else params.delete("capacity");

    if (filters.price.length > 0) params.set("price", filters.price.join(";"));
    else params.delete("price");

    router.replace(`${pathname}?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.type, filters.capacity, filters.price]);

  useEffect(() => {
    const type = searchParams.get("type");
    const capacity = searchParams.get("capacity");
    const price = searchParams.get("price");
    setFilters({
      type: type ? type.split(";") : [],
      capacity: capacity ? capacity.split(";") : [],
      price: price ? price.split(";") : [],
    });
  }, [searchParams]);

  return [filters, setFilters] as const;
};
