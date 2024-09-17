/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { QueryFetch } from "@/hooks/QueryFetch";

export const useCategories = () => {
  const [_, setRerender] = useState(0);
  const categoriesFetchObject = useMemo(
    () =>
      new QueryFetch(
        async () => await (await fetch("/api/cars/categories")).json(),
        [],
        () => setRerender((prev) => ++prev),
      ),
    [],
  );

  useEffect(() => {
    categoriesFetchObject.fetch();
  }, [categoriesFetchObject]);

  return categoriesFetchObject.getState();
};
