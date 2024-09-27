import HeroSection from "./components/Hero";
import PopularCars from "../../components/PopularCars";
import Recommended from "./components/RecommendedCars";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1220px] flex-1 flex-col gap-6 rounded-xl px-5 py-4 pb-20 text-foreground sm:px-10 xl:px-0">
      <HeroSection />
      <PopularCars />
      <Recommended />
    </main>
  );
}
