import AdvertiseSection from "@/components/ui/AdvertiseSection";
import Footer from "@/components/ui/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ServicesSection from "@/components/ui/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner />
      <AdvertiseSection />
      <ServicesSection />
    </main>
  );
}
