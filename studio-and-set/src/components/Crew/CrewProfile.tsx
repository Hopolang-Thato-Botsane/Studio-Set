'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import styles from './CrewProfile.module.css';

interface Credit {
  id: string;
  role: string;
  production: string;
  studio: string;
  type: string;
  scope: string;
}

export default function CrewProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'credits' | 'gear' | 'rates' | 'showreel' | 'account'>('credits');
  const [crewName, setCrewName] = useState('Thabiso Mofokeng');
  const [crewRole, setCrewRole] = useState('D.O.P');
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [yearsExperience, setYearsExperience] = useState('12+');
  const [location, setLocation] = useState('Johannesburg, South Africa');
  const [bioSummary, setBioSummary] = useState('12+ Commercials // 4 Features');
  const [autoMatching, setAutoMatching] = useState(true);

  const [equipmentList, setEquipmentList] = useState<string[]>([
    'ARRI Alexa Mini LF Package',
    'Cooke Anamorphic /i Prime Set (32, 50, 75, 100mm)',
    'Teradek Bolt 4K LT 750 Wireless Video',
    'SmallHD Cine 7 Monitor',
  ]);
  const [newEquipment, setNewEquipment] = useState('');

  const [gearSpecialties, setGearSpecialties] = useState<string[]>([
    'ARRI Alexa Mini LF',
    'RED V-Raptor 8K',
    'Sony FX9 / FX6',
    'Ronin 2 Stabilizer',
    'Steadicam Rigging',
  ]);
  const [newSpecialty, setNewSpecialty] = useState('');

  const [credits, setCredits] = useState<Credit[]>([
    {
      id: '1',
      role: 'Key Gaffer',
      studio: 'Up Rise Productions',
      type: 'Commercial',
      production: 'BMW "Gusheshe" M333i Tribute Launch Commercial',
      scope: 'Lead lighting distribution, 18K HMI array rigging, 3-day exterior night shoot.',
    },
    {
      id: '2',
      role: 'Line Producer',
      studio: 'Moon Man Studios',
      type: 'Commercial',
      production: 'Moyagoba Tours Commercial',
      scope: 'Managed 45-person crew manifest, multi-location logistics, and camera gear staging.',
    },
  ]);

  const [newRole, setNewRole] = useState('');
  const [newStudio, setNewStudio] = useState('');
  const [newProduction, setNewProduction] = useState('');
  const [newType, setNewType] = useState('Commercial');
  const [newScope, setNewScope] = useState('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setAvatarUrl(tempUrl);
    }
  };

  const handleAddEquipment = () => {
    if (newEquipment.trim()) {
      setEquipmentList([...equipmentList, newEquipment.trim()]);
      setNewEquipment('');
    }
  };

  const handleRemoveEquipment = (index: number) => {
    setEquipmentList(equipmentList.filter((_, i) => i !== index));
  };

  const handleAddSpecialty = () => {
    if (newSpecialty.trim() && !gearSpecialties.includes(newSpecialty.trim())) {
      setGearSpecialties([...gearSpecialties, newSpecialty.trim()]);
      setNewSpecialty('');
    }
  };

  const handleRemoveSpecialty = (item: string) => {
    setGearSpecialties(gearSpecialties.filter((s) => s !== item));
  };

  const handleAddCredit = () => {
    if (newRole.trim() && newProduction.trim()) {
      const newEntry: Credit = {
        id: Date.now().toString(),
        role: newRole,
        studio: newStudio || 'Independent',
        type: newType,
        production: newProduction,
        scope: newScope,
      };
      setCredits([newEntry, ...credits]);
      setNewRole('');
      setNewStudio('');
      setNewProduction('');
      setNewScope('');
    }
  };

  const handleDeleteCredit = (id: string) => {
    setCredits(credits.filter((c) => c.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div>
          <span className={styles.dashboardBadge}>CREW MEMBER PORTAL</span>
          <h1 className={styles.pageTitle}>Dashboard & Profile Settings</h1>
        </div>
        <button
          className={`${styles.editToggleBtn} ${isEditing ? styles.editingActive : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✓ Done Editing' : '✏ Edit Profile'}
        </button>
      </div>

      <div className={styles.layoutGrid}>

        <div className={styles.leftColumn}>

          <div className={styles.avatarCard}>
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={crewName}
                fill
                className={styles.avatarImage}
                priority
              />
            ) : (
              <div className={styles.avatarFallback} />
            )}

            <div className={styles.avatarOverlay} />
            <div className={styles.yearsBadge}>{yearsExperience} Years</div>

            {isEditing && (
              <label className={styles.uploadOverlayLabel}>
                📷 Change Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={styles.hiddenFileInput}
                />
              </label>
            )}

            <div className={styles.avatarContent}>
              {isEditing ? (
                <div className={styles.editStack}>
                  <input
                    type="text"
                    value={crewName}
                    onChange={(e) => setCrewName(e.target.value)}
                    className={styles.inputDark}
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    value={crewRole}
                    onChange={(e) => setCrewRole(e.target.value)}
                    className={styles.inputDark}
                    placeholder="Primary Role (e.g. D.O.P)"
                  />
                </div>
              ) : (
                <>
                  <h2 className={styles.crewName}>{crewName}</h2>
                  <p className={styles.crewTitle}>{crewRole}</p>
                </>
              )}
            </div>
          </div>

          <div className={styles.summaryCard}>
            <h3 className={styles.summaryHeader}>Profile Summary</h3>
            <div className={styles.summaryDivider} />
            
            <p className={styles.summaryTag}>S&S VERIFIED LEAD</p>
            
            {isEditing ? (
              <div className={styles.editStack}>
                <label className={styles.inputLabel}>Bio Details</label>
                <input
                  type="text"
                  value={bioSummary}
                  onChange={(e) => setBioSummary(e.target.value)}
                  className={styles.inputLight}
                />
                <label className={styles.inputLabel}>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={styles.inputLight}
                />
                <label className={styles.inputLabel}>Experience Tag</label>
                <input
                  type="text"
                  value={yearsExperience}
                  onChange={(e) => setYearsExperience(e.target.value)}
                  className={styles.inputLight}
                />
              </div>
            ) : (
              <>
                <p className={styles.summaryDetail}>{bioSummary}</p>
                <p className={styles.summaryDetail}>{location}</p>
              </>
            )}
          </div>
        </div>

        <div className={styles.rightColumn}>
          
          <div className={styles.tabBar}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'credits' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('credits')}
            >
              Credits
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'gear' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('gear')}
            >
              Gear Specialty
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'rates' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('rates')}
            >
              Rates & Gear
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'showreel' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('showreel')}
            >
              Showreel
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'account' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Account Settings
            </button>
          </div>

          <div className={styles.contentBox}>
            
            {activeTab === 'credits' && (
              <div>
                {isEditing && (
                  <div className={styles.addCard}>
                    <h4 className={styles.addTitle}>Add New Credit</h4>
                    <div className={styles.formGrid}>
                      <input
                        type="text"
                        placeholder="Role (e.g. Key Gaffer)"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className={styles.inputLight}
                      />
                      <input
                        type="text"
                        placeholder="Production House / Studio"
                        value={newStudio}
                        onChange={(e) => setNewStudio(e.target.value)}
                        className={styles.inputLight}
                      />
                      <input
                        type="text"
                        placeholder="Production Title"
                        value={newProduction}
                        onChange={(e) => setNewProduction(e.target.value)}
                        className={styles.inputLight}
                      />
                      <select
                        value={newType}
                        onChange={(e) => setNewType(e.target.value)}
                        className={styles.inputLight}
                      >
                        <option value="Commercial">Commercial</option>
                        <option value="Feature Film">Feature Film</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Music Video">Music Video</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Scope of work..."
                      value={newScope}
                      onChange={(e) => setNewScope(e.target.value)}
                      className={styles.textareaLight}
                    />
                    <button className={styles.primaryBtn} onClick={handleAddCredit}>
                      Add Credit
                    </button>
                  </div>
                )}

                <div className={styles.creditsList}>
                  {credits.map((credit) => (
                    <div key={credit.id} className={styles.creditItem}>
                      <div className={styles.creditHeader}>
                        <div>
                          <h3 className={styles.creditRole}>{credit.role}</h3>
                          <p className={styles.creditStudio}>{credit.studio}</p>
                        </div>
                        {isEditing && (
                          <button
                            className={styles.deleteBtn}
                            onClick={() => handleDeleteCredit(credit.id)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div className={styles.cardDivider} />
                      <div className={styles.metaGroup}>
                        <span className={styles.metaLabel}>Production Type:</span>
                        <p className={styles.metaVal}>{credit.type}</p>
                      </div>
                      <div className={styles.metaGroup}>
                        <span className={styles.metaLabel}>Production:</span>
                        <p className={styles.metaVal}>{credit.production}</p>
                      </div>
                      <div className={styles.metaGroup}>
                        <span className={styles.metaLabel}>Scope:</span>
                        <p className={styles.metaVal}>{credit.scope}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gear' && (
              <div>
                <h3 className={styles.gearGroupTitle}>Cameras & Systems Experienced With</h3>
                
                {isEditing && (
                  <div className={styles.addInlineRow}>
                    <input
                      type="text"
                      placeholder="Add system or gear (e.g. RED V-Raptor)"
                      value={newSpecialty}
                      onChange={(e) => setNewSpecialty(e.target.value)}
                      className={styles.inputLight}
                    />
                    <button className={styles.primaryBtn} onClick={handleAddSpecialty}>
                      Add Tag
                    </button>
                  </div>
                )}

                <div className={styles.tagWrapper}>
                  {gearSpecialties.map((item) => (
                    <span key={item} className={styles.gearTag}>
                      {item}
                      {isEditing && (
                        <button
                          className={styles.tagRemoveBtn}
                          onClick={() => handleRemoveSpecialty(item)}
                        >
                          ×
                        </button>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rates' && (
              <div>
                <div className={styles.ratesHeader}>
                  <h3 className={styles.ratesTitle}>Daily & Gear Rates</h3>
                  <ul className={styles.rateRules}>
                    <li>• Half day rates: 4 hours</li>
                    <li>• Full day rates: 10 hours</li>
                  </ul>
                </div>

                <div className={styles.rateGrid}>
                  <div className={styles.rateBlock}>
                    <span className={styles.rateLabel}>Half Day Rate</span>
                    <p className={styles.rateValue}>R4,500 / 4-Hr Day</p>
                  </div>
                  <div className={styles.rateBlock}>
                    <span className={styles.rateLabel}>Half Day Rate With Equipment</span>
                    <p className={styles.rateValue}>R7,500 / 4-Hr Day</p>
                  </div>
                  <div className={styles.rateBlock}>
                    <span className={styles.rateLabel}>Full Day Rate</span>
                    <p className={styles.rateValue}>R8,500 / 10-Hr Day</p>
                  </div>
                  <div className={styles.rateBlock}>
                    <span className={styles.rateLabel}>Full Day Rate With Equipment</span>
                    <p className={styles.rateValue}>R14,500 / 10-Hr Day</p>
                  </div>
                </div>

                <div className={styles.cardDivider} />

                <div className={styles.equipmentSection}>
                  <h4 className={styles.equipmentTitle}>Equipment Included in Gear Package:</h4>
                  
                  {isEditing && (
                    <div className={styles.addInlineRow}>
                      <input
                        type="text"
                        placeholder="Add equipment package item..."
                        value={newEquipment}
                        onChange={(e) => setNewEquipment(e.target.value)}
                        className={styles.inputLight}
                      />
                      <button className={styles.primaryBtn} onClick={handleAddEquipment}>
                        Add Item
                      </button>
                    </div>
                  )}

                  <ul className={styles.equipmentList}>
                    {equipmentList.map((item, idx) => (
                      <li key={idx} className={styles.equipmentItem}>
                        <span>✓ {item}</span>
                        {isEditing && (
                          <button
                            className={styles.removeBtn}
                            onClick={() => handleRemoveEquipment(idx)}
                          >
                            Remove
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardDivider} />

                <div className={styles.availabilityRow}>
                  <span>Available for Automated Job Matching: <strong>{autoMatching ? 'Yes' : 'No'}</strong></span>
                  <button
                    className={`${styles.toggleSwitch} ${autoMatching ? styles.activeSwitch : ''}`}
                    onClick={() => setAutoMatching(!autoMatching)}
                  >
                    <span className={styles.toggleThumb} />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'showreel' && (
              <div className={styles.showreelContainer}>
                <h3>Cinematography Showreel</h3>
                <div className={styles.videoWrapper}>
                  <iframe
                    className={styles.videoIframe}
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Crew Member Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div className={styles.accountSection}>
                <h3 className={styles.accountTitle}>Account & Contact Settings</h3>
                <p className={styles.accountSub}>Manage verified contact information and notifications.</p>

                <div className={styles.accountGrid}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Email Address</label>
                    <input
                      type="email"
                      defaultValue="thabiso@studioandset.com"
                      disabled={!isEditing}
                      className={isEditing ? styles.inputLight : styles.inputDisabled}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+27 82 000 0000"
                      disabled={!isEditing}
                      className={isEditing ? styles.inputLight : styles.inputDisabled}
                    />
                  </div>
                </div>

                {!isEditing && (
                  <p className={styles.editPromptNote}>
                    💡 Click <strong>"Edit Profile"</strong> at the top right to update your details or upload a new profile image.
                  </p>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}