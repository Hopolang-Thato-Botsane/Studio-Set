import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import Reviews from '@/components/Reviews/Reviews';
import ScoutAI from '@/components/ScoutAI/ScoutAI';

export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
      <Reviews/>
      <Footer/>
    </div>
  );
}