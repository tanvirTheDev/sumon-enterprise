import { CertificateCarousoul } from "@/components/HomePage/CertificateCarousoul";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";

import Management from "@/components/HomePage/Management";
import Stats from "@/components/HomePage/Stats";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhyChooseUs />
      <Management />
      <CertificateCarousoul />
      <Stats />
      {/* <OurClients /> */}
    </>
  );
}
