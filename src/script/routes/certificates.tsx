import { useState } from 'react';
import {
  CertCard,
  CertModal,
  certEntries,
  badgeEntries,
  byMostRecent,
  type CertEntry,
} from '../component/certs-badges';
import Reveal from '../component/reveal';
import SectionHeader from '../component/section-header';
import '../../styles/certs.css';

const categoryOrder = [
  'Web Development & Programming',
  'Cybersecurity',
  'Networking & IT Fundamentals',
  'Information Systems',
  'Emerging Technologies',
  'Entrepreneurship & Career',
];

const allEntries = [...certEntries, ...badgeEntries].sort(byMostRecent);

const groups = [
  ...categoryOrder.map((label) => ({
    label,
    entries: allEntries.filter((e) => e.category === label),
  })),
  {
    label: 'Others',
    entries: allEntries.filter((e) => !e.category || !categoryOrder.includes(e.category)),
  },
].filter((group) => group.entries.length > 0);

const Certificates = () => {
  const [selected, setSelected] = useState<CertEntry | null>(null);

  return (
    <div className="certs-container certs-page">
      {groups.map((group, groupIndex) => (
        <div key={group.label} className="certs-group">
          <Reveal delay={0.15 + groupIndex * 0.15}>
            <SectionHeader title={group.label} />
          </Reveal>
          <Reveal delay={0.3 + groupIndex * 0.15}>
            <div className="certs-grid">
              {group.entries.map((entry) => (
                <CertCard key={entry.key} entry={entry} onClick={() => setSelected(entry)} />
              ))}
            </div>
          </Reveal>
        </div>
      ))}

      <CertModal entry={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Certificates;
