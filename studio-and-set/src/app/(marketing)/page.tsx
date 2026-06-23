import Clients from "@/components/Clients/Clients";
import Services from "@/components/Services/Services";
import { getServices } from '@/sanity/lib/queries';
import Process from "@/components/Process/Process";
import Portfolio from "@/components/Portfolio/Portfolio";
import Storefront from "@/components/Storefront/Storefront";
import Footer from "@/components/Footer/Footer";

export default async function Home() {

  const servicesData = await getServices();

  return (
    <main>
      <Clients />
      <Process />
      
      <Services initialServices={servicesData} /> 
      
      <Portfolio />
      <Storefront />
      <Footer />
    </main>
  );
}