/* eslint-disable @typescript-eslint/no-unused-vars */
import { CarType } from "@/types";
import { useEffect, useMemo, useRef, useState } from "react";
import { QueryFetch } from "@/hooks/QueryFetch";

export type CarQueryFilter = "recommended" | "popular";

export const useCars = (filter?: CarQueryFilter) => {
  const [_, setRerender] = useState(0);
  const carFetchObject = useMemo(
    () =>
      new QueryFetch(
        async (filter) =>
          await (
            await fetch(filter ? `/api/cars?filter=${filter}` : "/api/cars")
          ).json(),
        [filter],
        () => setRerender((prev) => ++prev),
      ),
    [filter],
  );

  useEffect(() => {
    carFetchObject.fetch();
  }, [carFetchObject]);

  return carFetchObject.getState();
};
