import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import ScoutAI from '@/components/ScoutAI/ScoutAI';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';
import Process from '@/components/Process/Process';
import StoreSection from '@/components/StoreSection/StoreSection';


export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
      <Process/>
      <Reviews/>
      <StoreSection/>
      <Footer/>
    </div>
  );
}