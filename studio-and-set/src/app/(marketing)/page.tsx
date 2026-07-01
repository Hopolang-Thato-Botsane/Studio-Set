import Hero from "@/components/Hero/Hero";
import Clients from "@/components/Clients/Clients";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Portfolio from "@/components/Portfolio/Portfolio";
import StorePreview from "@/components/StorePreivew/StorePreview";
import Footer from "@/components/Footer/Footer";
import styles from './page.module.css';

import { getProcessSteps, getServices, getStorefrontPreview ,getProjects, getFooterConfiguration } from '@/sanity/lib/queries';

export default async function Home() {
  const processData = await getProcessSteps();
  const servicesData = await getServices();
  const storefrontData = await getStorefrontPreview();
  const projectsData = await getProjects();
  const footerData = await getFooterConfiguration();

  return (
    <div className={styles.homeViewportContainer}>
      {/* STICKY CINEMATIC HERO SEQUENCE */}
      <Hero />
      
      {/* CORE MARKETING SECTIONS */}
      <main className={styles.mainContentBody}>
        <Clients />
        <Process steps={processData || []} />
        <Services initialServices={servicesData} /> 
        <Portfolio initialProjects={projectsData} />
        <StorePreview products={storefrontData || []} headingTitle="MERCHANDISE" />
      </main>

      <Footer variant="marketing" data={footerData} />
    </div>
  );
}