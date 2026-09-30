'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import styles from "./StudioProfile.module.css"

interface Dispatcher {
  id: string;
  name: string;
  badge: string;
  role: string;
  email: string;
}

interface Manager {
  id: string;
  name: string;
  badge: string;
  avatar: string;
}

export default function StudioProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'company' | 'billing' | 'dispatchers'>('company');
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [registeredName, setRegisteredName] = useState('Up Rise Productions (Pty) Ltd');
  const [tradingName, setTradingName] = useState('Up Rise Studios');
  const [taxId, setTaxId] = useState('2024/123456/07');
  const [website, setWebsite] = useState('riseupproductions.co.za');
  const [primaryLocation, setPrimaryLocation] = useState('Johannesburg');
  const [secondaryLocation, setSecondaryLocation] = useState('Cape Town');
  const [studioEmail, setStudioEmail] = useState('productions@uprise.co.za');
  const [studioNumber, setStudioNumber] = useState('011 XXX XXXX');
  const [insuranceProvider, setInsuranceProvider] = useState('SATIB');
  const [policyLimit, setPolicyLimit] = useState('R10,000,000+');
  const [policyFileName, setPolicyFileName] = useState<string | null>(null);
  const [accountsEmail, setAccountsEmail] = useState('finance@riseupproductions.co.za');
  const [vatNumber, setVatNumber] = useState('4010293847');
  const [billingAddress, setBillingAddress] = useState('12 Rosebank Road, Dunkeld, JHB');
  
  const [accountManagers] = useState<Manager[]>([
    {
      id: '1',
      name: 'Thembisile Buyi',
      badge: 'Admi Alfa',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      name: 'Vusi Nkosi',
      badge: 'Admi Beta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      name: 'David DeCock',
      badge: 'Admi Beta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
  ]);

  const [dispatchers, setDispatchers] = useState<Dispatcher[]>([
    {
      id: '1',
      name: 'Thembisile Lesedi',
      badge: 'Alfa Administrator',
      role: 'Head of Production',
      email: 'ThembiLB@uprise.co.za',
    },
    {
      id: '2',
      name: 'Vusi Nkosi',
      badge: 'Administration Beta',
      role: 'Deputy Head of Production',
      email: 'VusiNkosi@uprise.co.za',
    },
    {
      id: '3',
      name: 'David DeCock',
      badge: 'Administration Beta',
      role: 'Production Manager',
      email: 'DavidD@uprise.co.za',
    },
  ]);

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoUrl(URL.createObjectURL(file));
    }
  };

  const handleDocUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPolicyFileName(file.name);
    }
  };

  const handleDispatcherChange = (id: string, field: keyof Dispatcher, value: string) => {
    setDispatchers(
      dispatchers.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div>
          <span className={styles.dashboardBadge}>STUDIO MANAGEMENT PORTAL</span>
          <h1 className={styles.pageTitle}>Studio Profile & Credentials</h1>
        </div>
        <button
          className={`${styles.editToggleBtn} ${isEditing ? styles.editingActive : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✓ Save Changes' : '✏ Edit Details'}
        </button>
      </div>

      <div className={styles.layoutGrid}>
        
        <div className={styles.leftColumn}>
          
          <div className={styles.logoCard}>
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Studio Logo"
                fill
                className={styles.logoImage}
              />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '-0.02em', color: '#fff' }}>
                  Logoipsum
                </h2>
              </div>
            )}

            {isEditing && (
              <label className={styles.uploadOverlayLabel}>
                📷 Replace Logo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className={styles.hiddenFileInput}
                />
              </label>
            )}
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Company Profile</h3>
            <div className={styles.cardDivider} />
            
            <p className={styles.detailLabel}>Registered Company Name</p>
            <p className={styles.detailVal}>{registeredName}</p>

            <p className={styles.detailLabel}>Trading Name</p>
            <p className={styles.detailVal}>{tradingName}</p>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Account Managers</h3>
            <div className={styles.cardDivider} />

            <div className={styles.managersList}>
              {accountManagers.map((manager) => (
                <div key={manager.id} className={styles.managerRow}>
                  <img
                    src={manager.avatar}
                    alt={manager.name}
                    className={styles.avatarCircle}
                  />
                  <div>
                    <h4 className={styles.managerName}>{manager.name}</h4>
                    <p className={styles.managerRole}>{manager.badge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          
          <div className={styles.tabBar}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'company' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('company')}
            >
              • Company & Tax
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'billing' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing & Insurance
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'dispatchers' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('dispatchers')}
            >
              Authorized Dispatchers
            </button>
          </div>

          {activeTab === 'company' && (
            <div className={styles.tabContent}>
              
              <div className={styles.contentCard}>
                <h3 className={styles.sectionTitle}>Studio Identity</h3>
                <div className={styles.cardDivider} />

                <div className={styles.infoGrid}>
                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Registered Studio Name:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={registeredName}
                        onChange={(e) => setRegisteredName(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{registeredName}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Trading Name (If different):</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tradingName}
                        onChange={(e) => setTradingName(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{tradingName}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Company Registration / Tax ID:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={taxId}
                        onChange={(e) => setTaxId(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{taxId}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Studio Website</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{website}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.contentCard}>
                <h3 className={styles.sectionTitle}>Studio Location & Contact Details</h3>
                <div className={styles.cardDivider} />

                <div className={styles.infoGrid}>
                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Primary Location</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={primaryLocation}
                        onChange={(e) => setPrimaryLocation(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{primaryLocation}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Secondary Location</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={secondaryLocation}
                        onChange={(e) => setSecondaryLocation(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{secondaryLocation}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Studio Email</span>
                    {isEditing ? (
                      <input
                        type="email"
                        value={studioEmail}
                        onChange={(e) => setStudioEmail(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{studioEmail}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Studio Number</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={studioNumber}
                        onChange={(e) => setStudioNumber(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{studioNumber}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className={styles.tabContent}>
              
              <div className={styles.contentCard}>
                <h3 className={styles.sectionTitle}>Production Insurance (Equipment Only)</h3>
                <div className={styles.cardDivider} />

                <div className={styles.infoGrid}>
                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Primary Gear Insurance Provider:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={insuranceProvider}
                        onChange={(e) => setInsuranceProvider(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{insuranceProvider}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Policy Limit / Coverage (ZAR)</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={policyLimit}
                        onChange={(e) => setPolicyLimit(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{policyLimit}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Company Registration / Tax ID:</span>
                    <p className={styles.fieldValue}>{taxId}</p>
                  </div>
                </div>
              </div>

              <label className={styles.uploadDropzone}>
                <span className={styles.uploadIcon}>📤</span>
                <p className={styles.uploadText}>
                  {policyFileName
                    ? `Uploaded Policy: ${policyFileName}`
                    : 'Upload Insurance policy documentation to proceed.'}
                </p>
                {policyFileName && (
                  <span className={styles.fileNameBadge}>✓ Document Uploaded</span>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,image/*"
                  onChange={handleDocUpload}
                  className={styles.hiddenFileInput}
                />
              </label>

              <div className={styles.contentCard}>
                <h3 className={styles.sectionTitle}>Billing & Invoicing Details</h3>
                <div className={styles.cardDivider} />

                <div className={styles.infoGrid}>
                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>Accounts Payable Email:</span>
                    {isEditing ? (
                      <input
                        type="email"
                        value={accountsEmail}
                        onChange={(e) => setAccountsEmail(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{accountsEmail}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock}>
                    <span className={styles.fieldLabel}>VAT / Tax Registration Number:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={vatNumber}
                        onChange={(e) => setVatNumber(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{vatNumber}</p>
                    )}
                  </div>

                  <div className={styles.infoBlock} style={{ gridColumn: '1 / -1' }}>
                    <span className={styles.fieldLabel}>Registered Billing Address:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                        className={styles.inputLight}
                      />
                    ) : (
                      <p className={styles.fieldValue}>{billingAddress}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dispatchers' && (
            <div className={styles.tabContent}>
              {dispatchers.map((dispatcher) => (
                <div key={dispatcher.id} className={styles.dispatcherCard}>
                  <div className={styles.dispatcherHeader}>
                    <div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={dispatcher.name}
                          onChange={(e) =>
                            handleDispatcherChange(dispatcher.id, 'name', e.target.value)
                          }
                          className={styles.inputLight}
                          style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.4rem' }}
                        />
                      ) : (
                        <h3 className={styles.dispatcherName}>{dispatcher.name}</h3>
                      )}
                      <p className={styles.dispatcherTag}>{dispatcher.badge}</p>
                    </div>
                  </div>

                  <div className={styles.cardDivider} />

                  <div className={styles.infoGrid}>
                    <div className={styles.infoBlock}>
                      <span className={styles.fieldLabel}>Role:</span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={dispatcher.role}
                          onChange={(e) =>
                            handleDispatcherChange(dispatcher.id, 'role', e.target.value)
                          }
                          className={styles.inputLight}
                        />
                      ) : (
                        <p className={styles.fieldValue}>{dispatcher.role}</p>
                      )}
                    </div>

                    <div className={styles.infoBlock}>
                      <span className={styles.fieldLabel}>Work Email:</span>
                      {isEditing ? (
                        <input
                          type="email"
                          value={dispatcher.email}
                          onChange={(e) =>
                            handleDispatcherChange(dispatcher.id, 'email', e.target.value)
                          }
                          className={styles.inputLight}
                        />
                      ) : (
                        <p className={styles.fieldValue}>{dispatcher.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}