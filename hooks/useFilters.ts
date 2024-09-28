import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export type SearchFilterType = {
  type: string[];
  capacity: string[];
  price: string[];
  search: string;
};

export const useFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, _setFilters] = useState<SearchFilterType>({
    type: [],
    capacity: [],
    price: [],
    search: "",
  });

  const handleFilters = (
    newFilters:
      | SearchFilterType
      | ((prevFilters: SearchFilterType) => SearchFilterType),
  ) => {
    const _newFilters =
      typeof newFilters === "function" ? newFilters(filters) : newFilters;
    _setFilters(_newFilters);
    const params = new URLSearchParams();
    if (_newFilters.type.length > 0)
      params.set("type", _newFilters.type.join(";"));
    else params.delete("type");

    if (_newFilters.capacity.length > 0)
      params.set("capacity", _newFilters.capacity.join(";"));
    else params.delete("capacity");

    if (_newFilters.price.length > 0)
      params.set("price", _newFilters.price.join(";"));
    else params.delete("price");

    if (_newFilters.search.length > 0) params.set("search", _newFilters.search);
    else params.delete("search");

    router.replace(`/cars?${params.toString()}`);
  };

  const setFilters = handleFilters;

  const handleTypeFilter = (value: string) => {
    setFilters((prev) => {
      const n = [...prev.type, value].sort();
      return { ...prev, type: n };
    });
  };

  const handleRemoveTypeFilter = (value: string) => {
    setFilters((prev) => {
      const n = prev.type.filter((type) => type !== value);
      return { ...prev, type: n };
    });
  };

  const handleCapacityFilter = (value: string) => {
    setFilters((prev) => {
      const n = [...prev.capacity, value.split(" ")[0]].sort();
      return { ...prev, capacity: n };
    });
  };

  const handleRemoveCapacityFilter = (value: string) => {
    setFilters((prev) => {
      const n = prev.capacity.filter(
        (capacity) => capacity !== value.split(" ")[0],
      );
      return { ...prev, capacity: n };
    });
  };

  const handlePriceFilter = (lower: number, upper: number) => {
    setFilters((prev) => {
      const n = [...prev.price, `${lower}-${upper}`].sort();
      return { ...prev, price: n };
    });
  };

  const handleRemovePriceFilter = (lower: number, upper: number) => {
    setFilters((prev) => {
      const n = prev.price.filter((price) => price !== `${lower}-${upper}`);
      return { ...prev, price: n };
    });
  };

  useEffect(() => {
    const type = searchParams.get("type");
    const capacity = searchParams.get("capacity");
    const price = searchParams.get("price");
    const search = searchParams.get("search");

    handleFilters({
      type: type ? type.split(";") : [],
      capacity: capacity ? capacity.split(";") : [],
      price: price ? price.split(";") : [],
      search: search ? search : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return {
    filters,
    setFilters,
    handleTypeFilter,
    handleRemoveTypeFilter,
    handleCapacityFilter,
    handleRemoveCapacityFilter,
    handlePriceFilter,
    handleRemovePriceFilter,
  };
};
