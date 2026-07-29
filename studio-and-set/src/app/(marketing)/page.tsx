import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import ScoutAI from '@/components/ScoutAI/ScoutAI';
import WhyUs from '@/components/WhyUs/WhyUs';
import Footer from '@/components/Footer/Footer';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Faq from '@/components/FAQs/Faq';
import FeaturedProductions from '@/components/FeaturedProductions/FeaturedProductions'
import { Familjen_Grotesk } from 'next/font/google';


export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
      <FeaturedProductions/>
      <WhyUs/>
      <HowItWorks/>
      <Faq/>
      <Footer/>
    </div>
  );
}