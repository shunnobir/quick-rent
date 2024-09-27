/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { QueryFetch } from "@/hooks/QueryFetch";

export const useCar = (id: string) => {
  const [_, setRerender] = useState(0);
  const carFetchObject = useMemo(
    () =>
      new QueryFetch(
        async () => await (await fetch(`/api/cars/${id}`)).json(),
        [],
        () => setRerender((prev) => ++prev),
      ),
    [id],
  );

  useEffect(() => {
    carFetchObject.fetch();
  }, [carFetchObject]);

  return carFetchObject.getState();
};
