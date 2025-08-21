import MainLayout from "../layouts/MainLayout";
import HeroSection from "../sections/HeroSection";
import BrowseByTypeSection from "../sections/BrowseByTypeSection";
import FeaturesSection from "../sections/FeaturesSection";
import FeaturedListingsSection from "../sections/FeaturedListingsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <BrowseByTypeSection />
      <FeaturesSection />
      <FeaturedListingsSection />
      <ContactSection />
    </MainLayout>
  );
}
// ...existing code...
