"use client";

import React, { useState } from "react";
import {
  PanelLeftClose,
  PanelLeftOpen,
  MessageSquare,
  Users,
  Video,
  Plus,
  Clapperboard,
  Settings,
} from "lucide-react";
import styles from "./SideBar.module.css";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`${styles.sidebar} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Header / Toggle */}
        <div className={styles.headerRow}>
          {isExpanded && <span className={styles.brandTitle}>Studio&Set</span>}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.iconButton}
            aria-label="Toggle Sidebar"
          >
            {isExpanded ? (
              <PanelLeftClose size={20} />
            ) : (
              <PanelLeftOpen size={20} />
            )}
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className={styles.navList}>
          <button className={styles.navItem}>
            <MessageSquare size={20} />
            {isExpanded && <span className={styles.label}>Messages</span>}
          </button>

          <button className={styles.navItem}>
            <Users size={20} />
            {isExpanded && <span className={styles.label}>Search Crew</span>}
          </button>

          <button className={styles.navItem}>
            <Video size={20} />
            {isExpanded && <span className={styles.label}>Search Kits</span>}
          </button>
        </nav>

        <hr className={styles.divider} />

        {/* Projects Section */}
        <div className={styles.navList}>
          <button className={styles.navItem}>
            <Plus size={20} />
            {isExpanded && <span className={styles.label}>Initiate Project</span>}
          </button>

          <button className={styles.navItem}>
            <Clapperboard size={20} />
            {isExpanded && <span className={styles.label}>Nora Advert</span>}
          </button>
        </div>
      </div>

      {/* Bottom Profile Section */}
      <div className={styles.bottomSection}>
        <div className={styles.profileRow}>
          <div className={styles.profileInfo}>
            <div className={styles.avatar} />
            {isExpanded && (
              <span className={styles.companyName}>Velocity Films</span>
            )}
          </div>
          {isExpanded && (
            <button className={styles.iconButton} aria-label="Settings">
              <Settings size={20} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}