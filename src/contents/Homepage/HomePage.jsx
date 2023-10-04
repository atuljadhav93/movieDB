import HeroSection from "./HeroSection";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

function HomePage() {
  return (
    <div className="shadow-2xl">
      <HeroSection />
      <Trending />
      <TopRated />
      <Popular />
    </div>
  );
}

export default HomePage;
