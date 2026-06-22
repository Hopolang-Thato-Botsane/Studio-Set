import styles from "./Clients.module.css"

const CLIENTS = [
  { 
    id: 1, 
    name: "ALPHA STUDIOS", 
    fallbackText: "Alpha Studios",
    logoSrc: "/assets/logos/alpha-studios.svg"
  },
  { 
    id: 2, 
    name: "NEXUS MEDIA", 
    fallbackText: "Nexus Media",
    logoSrc: "/assets/logos/nexus-media.svg"
  },
  { 
    id: 3, 
    name: "VANGUARD FILMS", 
    fallbackText: "Vanguard Films",
    logoSrc: "/assets/logos/vanguard-films.svg"
  },
  { 
    id: 4, 
    name: "CHRONOS INC", 
    fallbackText: "Chronos Inc",
    logoSrc: "/assets/logos/chronos-inc.svg"
  }
];

export default function Clients() {
  return (
    <section className={styles['clients-container']}>
      <h2 className={styles['clients-main-title']}>CLIENTS</h2>
      
      <div className={styles['clients-marquee-wrapper']}>
        <div className={styles['marquee-track']}>
          
          {/* TRACK ORIGINAL */}
          <div className={styles['marquee-group']}>
            {CLIENTS.map((client) => (
              <div key={`orig-${client.id}`} className={styles['client-logo-box']}>
                <img 
                  src={client.logoSrc} 
                  alt={`${client.name} Logo`} 
                  className={styles['client-logo-img']} 
                />
                <span className={styles['client-logo-text']}>{client.fallbackText}</span>
              </div>
            ))}
          </div>

          <div className={styles['marquee-group']} aria-hidden="true">
            {CLIENTS.map((client) => (
              <div key={`clone-${client.id}`} className={styles['client-logo-box']}>
                {/* <img 
                  src={client.logoSrc} 
                  alt={`${client.name} Logo`} 
                  className={styles['client-logo-img']} 
                /> */}
                <span className={styles['client-logo-text']}>{client.fallbackText}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}