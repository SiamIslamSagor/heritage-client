import AdvertiseSection from "@/components/ui/AdvertiseSection";
import Footer from "@/components/ui/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ServicesSection from "@/components/ui/ServicesSection";

export default function Home() {
  return (
    <main className="border-4 border-red-700 flex min-h-screen flex-col">
      <HeroBanner />
      <AdvertiseSection />
      <ServicesSection />
      <Footer />
      {/* <div className="min-h-screen bg-blue-200 border-2 m-2"></div>
      <h1 className="text-4xl bg-blue-800">hello</h1>
      <div className="min-h-screen bg-blue-200 border-2 m-2"></div>
      <div className="min-h-screen bg-blue-200 border-2 m-2"></div>
      <div className="min-h-screen bg-blue-200 border-2 m-2"></div>
      <div className="min-h-screen bg-blue-200 border-2 m-2"></div> */}
    </main>
  );
}
