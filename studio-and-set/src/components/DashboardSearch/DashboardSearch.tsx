import React, { useState } from 'react';
import styles from './DashboardSearch.module.css';

interface DashboardSearchProps {
  onNavigateToProduction?: (productionId: string) => void;
}

export const DashboardSearch: React.FC<DashboardSearchProps> = ({ onNavigateToProduction }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const hoverPrompt = "DJ Whoops music video shoot in Cape Town with a skeleton crew";

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (onNavigateToProduction) {
      onNavigateToProduction('prod-1');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What are we setting up today?</h1>
      <p className={styles.subheading}>
        Ask in natural language to start the creation of a production and Gaffer AI will create the
        template on your behalf. For a better template use specific crew types and locations
      </p>

      <form className={styles.inputWrapper} onSubmit={handleSubmit}>
        <div className={styles.innerBar}>
          <input
            type="text"
            className={styles.input}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={!isFocused && !searchValue ? "" : "Ask Gaffer AI..."}
          />

          {!searchValue && !isFocused && (
            <span className={styles.hoverHint}>{hoverPrompt}</span>
          )}

          <div className={styles.actionGroup}>
            <button type="button" className={styles.micButton} aria-label="Voice input">
              🎙️
            </button>
            <button type="submit" className={styles.submitButton} aria-label="Submit prompt">
              ↑
            </button>
          </div>
        </div>
      </form>

      <div className={styles.chipGroup}>
        <button 
          className={styles.chip} 
          onClick={() => {
            setSearchValue('Music Video Shoot');
            if (onNavigateToProduction) onNavigateToProduction('prod-1');
          }}
        >
          Music Video Shoot
        </button>
        <button className={styles.chip} onClick={() => setSearchValue('Commercial Shoot')}>
          Commercial Shoot
        </button>
        <button className={styles.chip} onClick={() => setSearchValue('Feature Film')}>
          Feature Film
        </button>
      </div>
    </div>
  );
};