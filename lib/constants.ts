export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://quick-rent.vercel.com/api"
    : "http://localhost:3000/api";
