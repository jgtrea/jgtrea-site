import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CertificateData } from './data/certificate-data';
import { BadgesData } from './data/badges-data';
import Reveal from './reveal';
import SectionHeader from './section-header';
import '../../styles/certs.css';

export type CertEntry = {
  key: string;
  title: string;
  issuer?: string;
  date?: string;
  achievements?: string[];
  image?: string;
  description?: string;
  category?: string;
  url?: string;
  kind: 'Certificate' | 'Badge';
};

export const byMostRecent = (a: CertEntry, b: CertEntry) =>
  (b.date ?? '').localeCompare(a.date ?? '');

export const certEntries: CertEntry[] = CertificateData.map((c): CertEntry => ({
  key: `cert-${c.id}`,
  title: c.title,
  issuer: c.issuer,
  date: c.date,
  achievements: c.achievements,
  image: c.image,
  description: c.description,
  category: c.category,
  url: c.url,
  kind: 'Certificate',
})).sort(byMostRecent);

export const badgeEntries: CertEntry[] = BadgesData.map((b): CertEntry => ({
  key: `badge-${b.id}`,
  title: b.title,
  issuer: b.issuer,
  date: b.date,
  achievements: b.achievements,
  image: b.image,
  description: b.description,
  category: b.category,
  url: b.url,
  kind: 'Badge',
})).sort(byMostRecent);

export const CertCard = ({ entry, onClick }: { entry: CertEntry; onClick: () => void }) => {
  const inner = (
    <span className="cert-card-inner">
      <span className="cert-card-title">{entry.title}</span>
      <span className="cert-card-view">&lt; view &gt;</span>
    </span>
  );
  const hover = {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 500, damping: 15 },
  } as const;

  // Badges link straight to their Credly page; certificates open the modal
  if (entry.kind === 'Badge' && entry.url) {
    return (
      <motion.a
        className="cert-card"
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        title={entry.title}
        {...hover}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button className="cert-card" onClick={onClick} title={entry.title} {...hover}>
      {inner}
    </motion.button>
  );
};

export const CertModal = ({
  entry,
  onClose,
}: {
  entry: CertEntry | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!entry) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          className="cert-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={onClose} aria-label="Close">
              &times;
            </button>
            <div className="cert-modal-row">
              {entry.image ? (
                <a
                  href={entry.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-image"
                  title="Open certificate"
                >
                  <img src={entry.image} alt={`${entry.title} certificate`} />
                </a>
              ) : (
                <div className="cert-modal-image cert-modal-image-placeholder" />
              )}
              <div className="cert-modal-text">
                <h3 className="cert-modal-title">{entry.title}</h3>
                <p className="cert-modal-meta">
                  {entry.kind}
                  {entry.issuer && <> &middot; {entry.issuer}</>}
                  {entry.date && <> &middot; {entry.date}</>}
                </p>
                {entry.description && (
                  <p className="cert-modal-body">{entry.description}</p>
                )}
                {entry.achievements && entry.achievements.length > 0 && (
                  <ul className="cert-modal-list">
                    {entry.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {entry.url && (
                  <div className="cert-modal-actions">
                    <a href={entry.url} target="_blank" rel="noopener noreferrer" className="rect-btn">
                      <span className="button-text">verify on credly</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CertsBadges = () => {
  const [selected, setSelected] = useState<CertEntry | null>(null);
  const latest = [...certEntries, ...badgeEntries].sort(byMostRecent).slice(0, 2);

  return (
    <div className="certs-container">
      <Reveal delay={0.3}>
        <SectionHeader
          title="Recent certification"
          action={{ label: 'All certificates', to: '/certificates' }}
        />
      </Reveal>

      <Reveal delay={0.45}>
        <div className="certs-grid">
          {latest.map((entry) => (
            <CertCard key={entry.key} entry={entry} onClick={() => setSelected(entry)} />
          ))}
        </div>
      </Reveal>

      <CertModal entry={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default CertsBadges;
