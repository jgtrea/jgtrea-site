import dtsisCert from './seminar/dtsis-may-20.png';
import wddaetCert from './seminar/wddaet-may-21.png';
import dddnaidnsCert from './seminar/dddnaidns-may-22.png';
import btbCert from './seminar/btb-june-20.png';
import btcCert from './seminar/btc-june-27.png';
import smmpspccCert from './seminar/smmpspcc-june-18.png';
import hitcCert from './seminar/hitc-july-4.png';

export type SeminarEntry = {
  title: string;
  type: 'Internal Seminar' | 'External Seminar';
  speaker?: string;
  date: string;
  description: string;
  cert?: string;
};

export const seminars: SeminarEntry[] = [
  {
    title: 'Digital Transformation and Smart Information Systems',
    type: 'Internal Seminar',
    speaker: 'Ethel Grace Verana',
    date: 'May 20, 2026',
    description:
      'Explored how organizations are shifting from manual processes to smart, data-driven information ' +
      'systems, and how successful digital transformation depends on aligning technology, people, and processes.',
    cert: dtsisCert,
  },
  {
    title: 'Web Development, Data Analytics, and Emerging Technologies',
    type: 'Internal Seminar',
    speaker: 'Kevin Yu',
    date: 'May 21, 2026',
    description:
      'Covered how modern web development now blends technical skill with data analytics, low-code ' +
      'platforms, AI, and a user-centered mindset.',
    cert: wddaetCert,
  },
  {
    title: 'Decode the Data, Defend the Network: An Introduction to Data Analytics and Network Security',
    type: 'Internal Seminar',
    speaker: 'Ethel Grace Verana',
    date: 'May 22, 2026',
    description:
      'Reframed cybersecurity through the CIA Triad, highlighting the data-privacy risks of third-party ' +
      'AI tools and the shift toward proactive, analytics-driven defense.',
    cert: dddnaidnsCert,
  },
  {
    title:
      'Social Media Marketing, Product and Smartphone Photography, and Cyber Hygiene Training for the LGBTQIA+ Community',
    type: 'External Seminar',
    date: 'June 18, 2026',
    description:
      'A training held in celebration of 2026 Pride Month and National ICT Month, covering general cyber ' +
      'hygiene with an introduction to online safety, privacy protection, and digital security, along with ' +
      'hands-on training in Canva for social media marketing and product and smartphone photography.',
    cert: smmpspccCert,
  },
  {
    title: 'Beyond the Breach: Leadership and Cybersecurity in the Age of Digital Transformation',
    type: 'External Seminar',
    speaker: 'Dr. Elizade Duran',
    date: 'June 20, 2026',
    description:
      'Framed cybersecurity as a leadership responsibility, exploring how organizations can build a ' +
      'security-first culture while navigating digital transformation.',
    cert: btbCert,
  },
  {
    title: 'TechTalk: Guiding Young Learners Toward Digital Wellness',
    type: 'External Seminar',
    date: 'June 25, 2026',
    description:
      'Discussed the safe use of technology for young learners, covering how technology is used today, ' +
      'online safety, and how AI and LLMs can be applied usefully and safely with human guidance and monitoring.',
  },
  {
    title: 'Beyond the Code: Next-Gen Skills for the Cloud-Native Era',
    type: 'External Seminar',
    speaker: 'Mr. Mark Anthony Hernandez',
    date: 'June 27, 2026',
    description:
      'Highlighted the skills developers need beyond programming, from cloud-native architecture and ' +
      'DevOps practices to continuous learning, to stay effective in the cloud era.',
    cert: btcCert,
  },
  {
    title: 'Head in the Clouds: Exploring How AI Transforms the Cloud Computing Landscape',
    type: 'Internal Seminar',
    speaker: 'Mr. Bryle Kezter Lim',
    date: 'July 4, 2026',
    description:
      'Explored how AI is reshaping cloud computing, from intelligent resource management and automation ' +
      'to AI-powered services now built into major cloud platforms.',
    cert: hitcCert,
  },
];
