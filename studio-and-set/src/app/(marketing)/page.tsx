import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import ScoutAI from '@/components/ScoutAI/ScoutAI';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Faq from '@/components/FAQs/Faq';
import FeaturedProductions from '@/components/FeaturedProductions/FeaturedProductions'


export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
      <FeaturedProductions/>
      <Reviews/>
      <HowItWorks/>
      <Faq/>
      <Footer/>
    </div>
  );
}