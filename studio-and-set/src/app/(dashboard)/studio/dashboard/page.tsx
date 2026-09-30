'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" x2="12" y1="19" y2="22"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="19" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

const SparklesIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const RotateCcwIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);

const mockData = {
  title: 'Music Video',
  artist: 'Dj Whoops ft LeNala = Lazy Culture',
  location: 'Cape Town',
  timeline: '23 - 24 September 2026',
  burnRate: 'R 86 500',
  heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  equipment: {
    id: 'eq-1',
    name: 'ARRI',
    category: 'Commercial / Flagship',
    tag: '#1 Pick',
    subtitle: 'Music Video/ Flagship',
    image: 'https://images.unsplash.com/photo-1585822710081-9c6f2d70c778?q=80&w=800&auto=format&fit=crop',
    description: 'Built for large-scale, high-budget agency spots requiring maximum illumination control and broadcast-grade optics.',
    primaryCamera: 'ARRI Alexa 35 Package + Master Built Anamorphic Primes',
    lightingArray: '2x ARRI SkyPanel X21, 1x ARRI 18/12K HMI PAR',
    dayRate: 'R45,000 – R65,000'
  },
  crew: {
    id: 'cr-1',
    name: 'Thabang Mofokeng',
    title: 'Director of Photography',
    verified: true,
    role: 'Key Gaffer // Commercial & Feature',
    location: 'Johannesburg',
    tag: '#1 Pick',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    summary: '12+ years of experience lighting high-end automotive commercials, narrative features, and complex studio setups.',
    recentCredits: 'BMW "Gusheshe" Global Spot // Netflix Drama Series (Season 2)',
    baseRate: 'R6,500 – R8,500 / 10-Hr Day',
    videoThumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'
  }
};

export default function StudioDashboardPage() {
  const [prompt, setPrompt] = useState('');
  const [stage, setStage] = useState<'initial' | 'generating' | 'manifest'>('initial');
  const [selectedEquipment, setSelectedEquipment] = useState<typeof mockData.equipment | null>(null);
  const [selectedCrew, setSelectedCrew] = useState<typeof mockData.crew | null>(null);

  const handleSubmit = (text: string) => {
    if (!text.trim()) return;
    setPrompt(text);
    setStage('generating');
    setTimeout(() => setStage('manifest'), 1500);
  };

  return (
    <div className={styles.pageWrapper}>
      {stage === 'initial' && (
        <div className={styles.promptContainer}>
          <div className={styles.badge}>
            <SparklesIcon size={14} />
            <span>Gaffer AI Workflow Assistant</span>
          </div>

          <h1 className={styles.heading}>What are we setting up today?</h1>
          <p className={styles.subheading}>
            Ask in natural language to start the creation of a production and Gaffer AI will create the template on your behalf.
          </p>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(prompt)}
              placeholder="e.g. Music video shoot in Cape Town with a skeleton crew"
              className={styles.input}
            />
            <div className={styles.inputActions}>
              <button type="button" className={styles.iconBtn}>
                <MicIcon />
              </button>
              <button
                type="button"
                onClick={() => handleSubmit(prompt)}
                disabled={!prompt.trim()}
                className={styles.submitBtn}
              >
                <ArrowUpIcon />
              </button>
            </div>
          </div>

          <div className={styles.chipsWrapper}>
            {['Music Video Shoot in Cape Town', 'Commercial Shoot', 'Feature Film'].map((chip) => (
              <button key={chip} onClick={() => handleSubmit(chip)} className={styles.chip}>
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === 'generating' && (
        <div className={styles.loadingBox}>
          <Image src={mockData.heroImage} alt="Cover" fill className={styles.loadingHero} />
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner}><SparklesIcon size={24} /></div>
            <h2 className={styles.heading}>Structuring Production Template...</h2>
            <p className={styles.subheading}>"{prompt}"</p>
          </div>
        </div>
      )}

      {stage === 'manifest' && (
        <div className={styles.manifestSection}>
          <div className={styles.manifestHeader}>
            <div>
              <span className={styles.tagline}>Gaffer AI Draft</span>
              <h1 className={styles.title}>{mockData.title}</h1>
              <p className={styles.meta}>Artist: {mockData.artist} • Location: {mockData.location}</p>
            </div>
            <button onClick={() => setStage('initial')} className={styles.chip}>
              <RotateCcwIcon /> Reset
            </button>
          </div>

          <div>
            <h3 className={styles.cardTitle}>Production Equipment</h3>
            <div className={styles.grid} style={{ marginTop: '12px' }}>
              <div className={styles.card} onClick={() => setSelectedEquipment(mockData.equipment)}>
                <div className={styles.cardImageWrapper}>
                  <Image src={mockData.equipment.image} alt={mockData.equipment.name} fill className={styles.cardImage} />
                  <span className={styles.cardBadge}>{mockData.equipment.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <div>
                    <p className={styles.cardTitle}>{mockData.equipment.name}</p>
                    <p className={styles.cardSub}>{mockData.equipment.subtitle}</p>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.cardTitle}>Production Crew</h3>
            <div className={styles.grid} style={{ marginTop: '12px' }}>
              <div className={styles.card} onClick={() => setSelectedCrew(mockData.crew)}>
                <div className={styles.cardImageWrapper}>
                  <Image src={mockData.crew.avatar} alt={mockData.crew.name} fill className={styles.cardImage} />
                  <span className={styles.cardBadge}>{mockData.crew.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <div>
                    <p className={styles.cardTitle}>{mockData.crew.name}</p>
                    <p className={styles.cardSub}>{mockData.crew.title}</p>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.financialCard}>
            <span className={styles.financialHeader}>Financial Breakdown</span>
            <div className={styles.financialRow}>
              <div>
                <p className={styles.meta}>Estimated Burn Rate: <strong style={{ color: '#fff' }}>{mockData.burnRate}</strong></p>
                <p className={styles.meta}>Timeline: {mockData.timeline}</p>
              </div>
              <button className={styles.primaryActionBtn}>Initiate Project</button>
            </div>
          </div>
        </div>
      )}

      {selectedEquipment && (
        <div className={styles.overlayBackdrop}>
          <div className={styles.modalDrawer}>
            <div>
              <div className={styles.drawerHeader}>
                <span className={styles.tagline}>Equipment Detail</span>
                <button className={styles.closeBtn} onClick={() => setSelectedEquipment(null)}><CloseIcon /></button>
              </div>
              <h2 className={styles.title} style={{ marginTop: '16px' }}>{selectedEquipment.name}</h2>
              <p className={styles.subheading}>{selectedEquipment.description}</p>
            </div>
            <div className={styles.drawerFooter}>
              <div>
                <span className={styles.meta}>Kit Rate</span>
                <p className={styles.cardTitle} style={{ color: '#f59e0b' }}>{selectedEquipment.dayRate}</p>
              </div>
              <button className={styles.primaryActionBtn} onClick={() => setSelectedEquipment(null)}>Confirm Selection</button>
            </div>
          </div>
        </div>
      )}

      {selectedCrew && (
        <div className={styles.overlayBackdrop}>
          <div className={styles.modalDrawer}>
            <div>
              <div className={styles.drawerHeader}>
                <span className={styles.tagline}>Crew Profile</span>
                <button className={styles.closeBtn} onClick={() => setSelectedCrew(null)}><CloseIcon /></button>
              </div>
              <h2 className={styles.title} style={{ marginTop: '16px' }}>{selectedCrew.name}</h2>
              <p className={styles.subheading}>{selectedCrew.summary}</p>
            </div>
            <div className={styles.drawerFooter}>
              <div>
                <span className={styles.meta}>Base Rate</span>
                <p className={styles.cardTitle} style={{ color: '#f59e0b' }}>{selectedCrew.baseRate}</p>
              </div>
              <button className={styles.primaryActionBtn} onClick={() => setSelectedCrew(null)}>Add to Crew</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}