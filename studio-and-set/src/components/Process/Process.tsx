import styles from './Process.module.css';

interface ProcessStepItem {
  id: string;
  act: string;
  tagline: string;
  headline: string;
  description: string;
}

interface ProcessProps {
  steps?: ProcessStepItem[];
}

export default function Process({ steps = [] }: ProcessProps) {
  return (
    /* Using bracket notation forces a 100% literal match with your original dashed CSS classes */
    <section className={styles['process-container']}>
      <h2 className={styles['process-main-title']}>PROCESS</h2>
      
      <div className={styles['process-grid']}>
        {steps?.map((step) => (
          <div key={step.id} className={styles['process-card']}>
            <span className={styles['process-act-badge']}>{step.act}</span>
            
            <div className={styles['process-default-label']}>
              <span className={styles['process-tagline']}>{step.tagline}</span>
            </div>

            <div className={styles['process-hover-content']}>
              <h3 className={styles['process-headline']}>{step.headline}</h3>
              <p className={styles['process-description']}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}