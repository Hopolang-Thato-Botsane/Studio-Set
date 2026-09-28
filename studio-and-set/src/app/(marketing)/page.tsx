import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Faq from '@/components/FAQs/Faq';
import FeaturedProductions from '@/components/FeaturedProductions/FeaturedProductions'
import DualCTA from '@/components/DuelCTA/DualCTA';


export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <HowItWorks/>
      <DualCTA/>
      <FeaturedProductions/>
      <Reviews/>
      <Faq/>
      <Footer/>
    </div>
  );
}