import { useEffect, useState } from "react";

const useFavorite = (car_id: string) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const data = localStorage.getItem("favorites");
    let favorites: string[] = [];
    if (data) {
      favorites = JSON.parse(data);
    }
    if (favorite) {
      favorites = favorites.filter((id) => id !== car_id);
    } else {
      favorites.push(car_id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorite((prev) => !prev);
  };

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      const favorites: string[] = JSON.parse(data);
      setFavorite(favorites.find((id) => id === car_id) !== undefined);
    }
  }, []);

  return { favorite, handleFavorite } as const;
};

export default useFavorite;
