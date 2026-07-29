import { FEATURED_PRODUCTIONS } from './FeaturedProductionData';
import styles from './FeaturedProductions.module.css';

export default function FeaturedProductions() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Productions (2026)</h2>
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.track}>
          {FEATURED_PRODUCTIONS.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.posterImage}
                />
              </div>

              <div className={styles.details}>
                <h3 className={styles.movieTitle}>{item.title}</h3>
                <span className={styles.movieType}>{item.type}</span>
                <span className={styles.movieYear}>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}