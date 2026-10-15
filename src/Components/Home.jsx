
import { EventSection } from "./events/EventSection";
import HeroSection from "./hero/HeroSection";
import OurStory from "./story/OurStory";
import WeddingTransition from "./transition/WeddingTransition";

const Home = () => {
  return (
    <main>
      <HeroSection />

      {/* Next section will go here */}
     <OurStory />
     <WeddingTransition />
     <EventSection />
    </main>
  );
};

export default Home;
