import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import QuickSearch from "./components/QuickSearch";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickSearch />
      <FeaturedProperties />
      <WhyChooseUs />
    </div>
  );
}
