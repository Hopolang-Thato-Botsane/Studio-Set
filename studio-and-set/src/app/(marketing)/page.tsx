import Clients from "@/components/Clients/Clients";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Portfolio from "@/components/Portfolio/Portfolio";
import StorePreview from "@/components/StorePreivew/StorePreview";
import Footer from "@/components/Footer/Footer";

import { getProcessSteps, getServices, getStorefrontPreview ,getProjects } from '@/sanity/lib/queries';

export default async function Home() {

  const processData = await getProcessSteps();
  const servicesData = await getServices();
  const storefrontData = await getStorefrontPreview();
  const projectsData = await getProjects();

  console.log("SANITY STOREFRONT DATA:", storefrontData);

  return (
    <main>
      <Clients />
      <Process steps={processData || []} />
      
      <Services initialServices={servicesData} /> 
      <Portfolio initialProjects={projectsData} />
      
      <StorePreview products={storefrontData || []} headingTitle="MERCHANDISE" />
      <Footer />
    </main>
  );
}