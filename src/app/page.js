import Header from "@/components/Header";
import PharchiroHero from "@/components/PharchiroHero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ConditionsTreated from "@/components/ConditionsTreated";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "World-Class Chiropractic Care at Pharaoh Health and Rehab in League City, TX",
  description: "Immerse yourself in the world-class chiropractic care offered at Pharaoh Health and Rehab in League City, TX. Book your appointment today for sports rehab and pain relief.",
  keywords: "Chiropractic Care, Sports Rehab, League City TX Chiropractor, Back Pain, Neck Pain, Pharaoh Health and Rehab",
  openGraph: {
    title: "Pharaoh Health and Rehab",
    description: "Chiropractic + Sports Rehab in League City, TX",
    url: "https://pharchiro.com/",
    siteName: "Pharaoh Heath and Rehab",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://pharchiro.com/",
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <PharchiroHero />
        <AboutUs />
        <Services />
        <ConditionsTreated />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <LocationMap />
        <Prefooter />
      </main>
      <Footer />
    </>
  );
}
