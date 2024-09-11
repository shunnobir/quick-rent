import HeroSection from "./components/Hero";
import PopularCars from "./components/PopularCars";
import Recommended from "./components/RecommendedCars";
import RentInfo from "./components/RentInfo";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1220px] flex-1 flex-col gap-6 rounded-xl text-foreground">
      <HeroSection />
      <RentInfo />
      <PopularCars />
      <Recommended />
    </main>
  );
}
