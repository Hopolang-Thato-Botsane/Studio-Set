// ScoutAI.tsx
'use client';

import React, { useRef, useState } from 'react';
import styles from './ScoutAI.module.css';

export default function ScoutAI() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet Scout AI</h2>

      <div className={styles.videoContainer} onClick={togglePlay}>
        <video
          ref={videoRef}
          className={styles.videoElement}
          src="/assets/videos/scout-ai.mp4" /* future video / gif file */
          poster="/assets/images/scout-poster.jpg" /* A clean dark placeholder image */
          playsInline
          loop
          muted
        />

        <button className={styles.playButton} aria-label={isPlaying ? "Pause video" : "Play video"}>
          {isPlaying ? (
            <svg className={styles.pauseIcon} viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className={styles.playIcon} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}