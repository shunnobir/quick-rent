export interface CarType {
  id: string;
  name: string;
  description: string;
  "car-type": string;
  "tank-capacity": string;
  power: string;
  "seating-capacity": number;
  "rent-price-per-day": number;
  discount: number;
  vendor: string;
  images: {
    id: string;
    url: string;
  }[];
  reviews: ReviewType[];
}

export type CategoryType =
  | {
      id: string;
      name: string;
      type: "options" | "slider";
      categories: string[];
    }
  | {
      id: string;
      name: string;
      type: "options" | "slider";
      categories: number[];
    };

export interface ReviewType {
  id: string;
  "reviewer-name": string;
  "reviewer-image": string;
  review: string;
  stars: number;
  date: string;
}
