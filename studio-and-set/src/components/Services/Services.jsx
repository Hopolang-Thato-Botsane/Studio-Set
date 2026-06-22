"use client";
import react, { useState, useEffect, useRef } from 'react';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    id: 1,
    title: "CURATED PACKAGED KITS",
    description: "We eliminate configuration friction. Our team packs, balances, and optimizes readily curated production kits tailored specifically for your project scale—whether it's an elite commercial, narrative short, or high-end editorial.",
    tags: ["CAMERA PACKAGES", "GAFFER & LIGHTING ARRAYS", "AUDIO RIGS"],
    image: "/assets/images/kits.jpg"
  },
  {
    id: 2,
    title: "LOGISTICS & INSURANCE",
    description: "The premium package price is entirely inclusive. We manage the freight logistics directly to your location and fully insure the hardware ecosystem under our native policy. You pay one transparent price; we carry the risk.",
    tags: ["DIRECT TO SET SHIPPING", "INSURED FREIGHT", "NO HIDDEN FEES"],
    image: "/assets/images/logistics.jpg"
  },
  {
    id: 3,
    title: "ON-SET TECHNICAL AID",
    description: "We don't just drop off boxes and disappear. Every ecosystem rental includes active on-set technical deployment. Our specialists handle hardware configuration during tech-setup and remain fully on-call throughout your entire production schedule.",
    tags: ["SET RIGGING", "ON CALL SUPPORT", "HARDWARE TROUBLESHOOTING"],
    image: "/assets/images/technical.jpg"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles['services-wrapper']}>
      <span className={styles['section-label']}>SERVICES</span>
      
      <div className={styles['services-container']}>
        <div className={styles['left-sticky-canvas']}>
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={`img-${service.id}`}
              className={`${styles['canvas-image-layer']} ${activeIndex === idx ? styles['active-layer'] : ''}`}
              style={{ backgroundColor: '#16181D' }}
            >
              {/* <img src={service.image} alt={service.title} className={styles['actual-image']} /> */}
            </div>
          ))}
        </div>

        <div className={styles['right-scroll-content']}>
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id} 
              className={styles['service-text-block']}
              data-index={idx}
              ref={(el) => (sectionRefs.current[idx] = el)}
            >
              <h2 className={styles['service-title']}>{service.title}</h2>
              <p className={styles['service-description']}>{service.description}</p>
              
              <ul className={styles['service-tags-list']}>
                {service.tags.map((tag, tIdx) => (
                  <li key={tIdx} className={styles['service-tag']}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}