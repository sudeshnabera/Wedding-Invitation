
import WeddingCountdown from "./countDown/WeddingCountdown";
import { EventSection } from "./events/EventSection";
import FamilyInvitation from "./family/FamilyInvitation";
import WeddingFooter from "./footer/WeddingFooter";
import HeroSection from "./hero/HeroSection";
import OurStory from "./story/OurStory";
import WeddingTransition from "./transition/WeddingTransition";
import WeddingVenue from "./venu/WeddingVenue";
import ScrollSection from "./scrollPanel/ScrollPanel";
import WeddingDivider from "./divider/WeddingDivider";

const Home = () => {
  return (
    <main>
      <ScrollSection>
        <HeroSection />
      </ScrollSection>
      <WeddingDivider variant="lotus" />
      <ScrollSection>
        <OurStory />
      </ScrollSection>
      <WeddingDivider variant="filigree" />
      <ScrollSection>
        <WeddingTransition />
      </ScrollSection>
      <WeddingDivider variant="shankha" tone="maroon" />
      <ScrollSection>
        <EventSection />
      </ScrollSection>
      <WeddingDivider variant="lotus" />

      <ScrollSection>
        <WeddingVenue />
      </ScrollSection>
      <WeddingDivider variant="filigree" />
      <ScrollSection>
        <WeddingCountdown />
      </ScrollSection>
      <WeddingDivider variant="lotus" tone="maroon" />
      <ScrollSection>
        <FamilyInvitation />
      </ScrollSection>
      <WeddingDivider variant="seal" />
      <ScrollSection>
        <WeddingFooter />
      </ScrollSection>
    </main>
  );
};

export default Home;
