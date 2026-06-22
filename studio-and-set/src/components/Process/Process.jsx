import styles from "./Process.moduel.css"

const PROCESS_STEPS = [
  {
    act: "ACT 1",
    tagline: "VETTING & CLEARANCE",
    headline: "Submit Manifest",
    description: "You select your curated production kit and submit your shoot dates, location, and insurance vetting details through the application portal."
  },
  {
    act: "ACT 2",
    tagline: "LOGISTICAL DEPLOYMENT",
    headline: "Freight & Transit",
    description: "Once approved, we handle the freight logistics. The fully insured kit is packed into custom flight cases and shipped directly to your set location."
  },
  {
    act: "ACT 3",
    tagline: "HARDWARE RIGGING",
    headline: "On-Set Setup",
    description: "Our technical specialist arrives on-site with the delivery to assist your crew with hardware unboxing, balancing, and initial gear configuration."
  },
  {
    act: "ACT 4",
    tagline: "RECOVERY & RETRIEVAL",
    headline: "Post-Production Offload",
    description: "When production wraps, our team handles the breakdown logistics, technical inventory checks, and return transport right from your set coordinates."
  }
];

export default function Process() {
  return (
    <section className="process-container">
      <h2 className="process-main-title">PROCESS</h2>
      
      <div className="process-grid">
        {PROCESS_STEPS.map((step, index) => (
          <div key={index} className="process-card">
            <span className="process-act-badge">{step.act}</span>
            
            <div className="process-default-label">
              <span className="process-tagline">{step.tagline}</span>
            </div>

            <div className="process-hover-content">
              <h3 className="process-headline">{step.headline}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}