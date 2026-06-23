import Clients from "@/components/Clients/Clients";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Portfolio from "@/components/Portfolio/Portfolio";
import Storefront from "@/components/Storefront/Storefront";
import Footer from "@/components/Footer/Footer";

import { getServices, getProjects } from '@/sanity/lib/queries';

export default async function Home() {

  const servicesData = await getServices();
  const projectsData = await getProjects();

  return (
    <main>
      <Clients />
      <Process />
      
      <Services initialServices={servicesData} /> 
      <Portfolio initialProjects={projectsData} />
      
      <Storefront />
      <Footer />
    </main>
  );
}