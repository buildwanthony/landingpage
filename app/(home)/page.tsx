import { HeroSection } from "@/components/sections/hero";
import { CurrentFocus } from "@/components/sections/current-focus";
import { FeaturedProject } from "@/components/sections/featured-project";
import { LatestWriting } from "@/components/sections/latest-writing";
import { LatestVideos } from "@/components/sections/latest-videos";
import { PopularResources } from "@/components/sections/popular-resources";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";
import { Timeline } from "@/components/sections/timeline";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CurrentFocus />
      <FeaturedProject />
      <LatestWriting />
      <LatestVideos />
      <PopularResources />
      <NewsletterCTA />
      <Timeline />
    </>
  );
}
