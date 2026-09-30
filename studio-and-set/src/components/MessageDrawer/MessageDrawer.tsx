'use client';

import React, { useState, useEffect } from 'react';
import styles from './MessageDrawer.module.css';

export interface MessageItem {
  title?: string;
  subtitle?: string;
  body: string;
}

export interface MessageThread {
  id: string;
  name: string;
  avatar?: string;
  preview: string;
  unreadCount?: number;
  isAI?: boolean;
  messages: MessageItem[];
}

const INITIAL_THREADS: MessageThread[] = [
  {
    id: 'gaffer-ai',
    name: 'Gaffer AI',
    preview: 'Morning. Just wanted to know if we’ll be shooting on location or in studio.',
    unreadCount: 3,
    isAI: true,
    messages: [
      {
        title: 'Studio & Set / Gaffer AI',
        subtitle: 'Platform Access Activated',
        body: 'Congratulations on launching your first production on Studio and Set! Your project manifest is now active.',
      },
    ],
  },
  {
    id: 'thabo',
    name: 'Thabo Khumalo',
    avatar: '/images/thabo.jpg',
    preview: 'Morning. Just wanted to know if we’ll be shooting on location or in studio.',
    unreadCount: 1,
    messages: [
      {
        title: 'Thabo Khumalo',
        subtitle: 'Location Inquiry',
        body: 'Morning. Just wanted to know if we’ll be shooting on location or in studio.',
      },
    ],
  },
];

export interface MessagesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  crewId?: string | null;
}

export function MessagesDrawer({ isOpen, onClose, crewId }: MessagesDrawerProps) {
  const [threads, setThreads] = useState<MessageThread[]>(INITIAL_THREADS);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log('[MessagesDrawer] Rendered. isOpen:', isOpen, 'crewId:', crewId);
  }, [isOpen, crewId]);

  useEffect(() => {
    if (crewId) {
      const matched = threads.find((t) => t.id === crewId);
      if (matched) {
        setSelectedThreadId(matched.id);
      } else {
        setSelectedThreadId(threads[0]?.id || null);
      }
    }
  }, [crewId, threads]);

  const activeThread = threads.find((t) => t.id === selectedThreadId);

  const handleClose = () => {
    setSelectedThreadId(null);
    onClose();
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedThreadId) return;

    const newMessage: MessageItem = {
      body: inputText.trim(),
    };

    setThreads((prevThreads) =>
      prevThreads.map((t) => {
        if (t.id === selectedThreadId) {
          return {
            ...t,
            preview: inputText.trim(),
            messages: [...t.messages, newMessage],
          };
        }
        return t;
      })
    );

    setInputText('');
  };

  if (!isOpen) return null;

  return (
    <div 
      id="messages-drawer-root"
      className={styles.overlay} 
      onClick={handleClose}
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerTitleGroup}>
            {activeThread && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => setSelectedThreadId(null)}
                aria-label="Back to messages"
              >
                ←
              </button>
            )}
            <h2 className={styles.headerTitle}>
              {activeThread ? activeThread.name : 'Messages'}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {!activeThread ? (
            <div className={styles.threadList}>
              {threads.map((thread) => (
                <div
                  key={thread.id}
                  className={styles.threadItem}
                  onClick={() => setSelectedThreadId(thread.id)}
                >
                  <div className={styles.avatarWrapper}>
                    {thread.isAI ? (
                      <div className={styles.aiAvatar} />
                    ) : thread.avatar ? (
                      <img
                        src={thread.avatar}
                        alt={thread.name}
                        className={styles.avatarImg}
                      />
                    ) : (
                      <div className={styles.fallbackAvatar}>
                        {thread.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className={styles.threadDetails}>
                    <h3 className={styles.threadName}>{thread.name}</h3>
                    <p className={styles.threadPreview}>{thread.preview}</p>
                  </div>

                  {thread.unreadCount && (
                    <div className={styles.badge}>{thread.unreadCount}</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.threadMessages}>
              {activeThread.messages.map((msg, idx) => (
                <div key={idx} className={styles.messageCard}>
                  {msg.title && <h4 className={styles.msgTitle}>{msg.title}</h4>}
                  {msg.subtitle && <h5 className={styles.msgSubtitle}>{msg.subtitle}</h5>}
                  {(msg.title || msg.subtitle) && <hr className={styles.cardDivider} />}
                  <p className={styles.msgBody}>{msg.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {activeThread && (
          <form className={styles.footer} onSubmit={handleSendMessage}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Type a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className={styles.chatInput}
              />
              <button type="submit" className={styles.sendBtn} aria-label="Send">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}