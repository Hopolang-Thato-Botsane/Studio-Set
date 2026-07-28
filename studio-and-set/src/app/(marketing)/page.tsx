import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import ScoutAI from '@/components/ScoutAI/ScoutAI';
import WhyUs from '@/components/WhyUs/WhyUs';
import Footer from '@/components/Footer/Footer';


export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
      <WhyUs/>
      <Footer/>
    </div>
  );
}