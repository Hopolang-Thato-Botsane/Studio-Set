"use client";

import styles from './Portfolio.module.css';

const MOVIE_PROJECTS = [
  { id: 1, title: "NARRATIVE FEATURE", year: "2025", size: "large", videoUrl: "" },
  { id: 2, title: "COMMERCIAL SHORT", year: "2025", size: "small", videoUrl: "" },
  { id: 3, title: "EDITORIAL BLOCK", year: "2025", size: "large", videoUrl: "" },
  { id: 4, title: "INDIE DOCUMENTARY", year: "2025", size: "small", videoUrl: "" },
  { id: 5, title: "CINEMATIC ESSAY", year: "2025", size: "large", videoUrl: "" },
  { id: 6, title: "MUSIC SHOWCASE", year: "2025", size: "small", videoUrl: "" }
];

export default function Portfolio() {
  return (
    <section className={styles['execution-wrapper']}>
      <div className={styles['sticky-window']}>
        
        <div className={styles['fixed-text-layer']}>
          <h1 className={styles['main-headline']}>EXECUTION</h1>
          <p className={styles['sub-headline']}>Collection 2025</p>
        </div>

        <div className={styles['cards-scroll-grid']}>
          {MOVIE_PROJECTS.map((movie) => (
            <div 
              key={movie.id} 
              className={`${styles['project-card']} ${styles[movie.size]}`}
            >
              <div className={styles['video-placeholder']}>
                <div className={styles['fallback-box']} />
              </div>
              <div className={styles['meta-data']}>
                <h3 className={styles['movie-title']}>{movie.title}</h3>
                <p className={styles['movie-year']}>{movie.year}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}