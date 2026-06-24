"use client";

import styles from './Portfolio.module.css';

interface ProjectItem {
  _id: string;
  title: string;
  productionName?: string;
  productionYear?: number;
  projectUrl?: string;
  imageUrl?: string;
}

interface PortfolioProps {
  initialProjects: ProjectItem[];
}

export default function Portfolio({ initialProjects }: PortfolioProps) {

  const projectsList = initialProjects ?? [];

  return (
    <section className={styles['execution-wrapper']}>
      <div className={styles['sticky-window']}>
        
        <div className={styles['fixed-text-layer']}>
          <h1 className={styles['main-headline']}>EXECUTION</h1>
          <p className={styles['sub-headline']}>Collection 2025</p>
        </div>

        <div className={styles['cards-scroll-grid']}>
          {projectsList.map((movie, idx) => (
            <div 
              key={movie._id} 
              className={`${styles['project-card']} ${idx % 2 === 0 ? styles['large'] : styles['small']}`}
            >
              <div className={styles['video-placeholder']}>
                {movie.imageUrl ? (
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.productionName || movie.title} 
                    className={styles['actual-image-layer']} 
                  />
                ) : (
                  <div className={styles['fallback-box']} />
                )}
              </div>
              
              <div className={styles['meta-data']}>
                <h3 className={styles['movie-title']}>
                  {movie.productionName || movie.title}
                </h3>
                <p className={styles['movie-year']}>
                  {movie.productionYear || "2025"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}