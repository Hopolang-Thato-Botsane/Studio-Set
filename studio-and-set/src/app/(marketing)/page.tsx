import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import ScoutAI from '@/components/ScoutAI/ScoutAI';

export default async function Home() {

  return (
    <div className={styles.homeViewportContainer}>
      <Hero/>
      <ScoutAI/>
    </div>
  );
}