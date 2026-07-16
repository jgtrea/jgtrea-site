import dtsisCert from './practicum/seminar/dtsis-may-20.png';
import wddaetCert from './practicum/seminar/wddaet-may-21.png';
import dddnaidnsCert from './practicum/seminar/dddnaidns-may-22.png';
import btbCert from './practicum/seminar/btb-june-20.png';
import afsCert from './practicum/seminar/afs-june-21.png';
import prosCert from './practicum/seminar/pros-march-7.png';
import bcCert from './practicum/seminar/bc-feb-5.png';
import crtCert from './practicum/seminar/crt-april-21.jpg';
import pythCert from './practicum/seminar/pyth-nov-22.png';

export interface CertificateData {
    id: number;
    title: string;
    issuer?: string;
    date?: string;
    achievements?: string[];
    image?: string;
    description?: string;
    category?: string;
    url?: string;
}

export const CertificateData: CertificateData[] = [
    {
        id: 1,
        title: "CodeChum Python Course Certificate",
        issuer: "CodeChum",
        date: "2022/11",
        image: pythCert,
        category: "Web Development & Programming"
    },
    {
        id: 3,
        title: "Digital Transformtion and Information Systems",
        issuer: "Ms. Ethel Grace Verana",
        date: "2026/05",
        image: dtsisCert,
        category: "Information Systems",
        description:
            "Explored how organizations are shifting from manual processes to smart, data-driven information " +
            "systems, and how successful digital transformation depends on aligning technology, people, and processes."
    },
    {
        id: 4,
        title: "Web Development, Data Analytics, and Emerging Technologies",
        issuer: "Engr. Kevin Yu",
        date: "2026/05",
        image: wddaetCert,
        category: "Web Development & Programming",
        description:
            "Covered how modern web development now blends technical skill with data analytics, low-code " +
            "platforms, AI, and a user-centered mindset."
    },
    {
        id: 5,
        title: "Decode the Data, Defend the Network: An Introduction to Data Analytics and Network Security",
        issuer: "Ms. Ethel Grace Verana",
        date: "2026/05",
        image: dddnaidnsCert,
        category: "Cybersecurity",
        description:
            "Reframed cybersecurity through the CIA Triad, highlighting the data-privacy risks of third-party " +
            "AI tools and the shift toward proactive, analytics-driven defense."
    },
    {
        id: 6,
        title: "Amazon - Full Stack Web Development",
        issuer: "Coursera",
        date: "2026/06",
        image: afsCert,
        category: "Web Development & Programming"
    },
    {
        id: 7,
        title: "Beyond the Breach: Leadership and Cybersecurity in the Age of Digital Transformation",
        issuer: "Joshua Fil V. Evasco",
        date: "2026/06",
        image: btbCert,
        category: "Cybersecurity",
        description:
            "Framed cybersecurity as a leadership responsibility, exploring how organizations can build a " +
            "security-first culture while navigating digital transformation."
    },
    {
        id: 8,
        title: "Technopreneurship: A Journey in Building Your Own Tech Start Up",
        date: "2024/03",
        image: prosCert,
        category: "Entrepreneurship & Career"
    },
    {
        id: 9,
        title: "Architecting the Future with Decentralization: An Introduction to Blockchain",
        date: "2025/02",
        image: bcCert,
        category: "Emerging Technologies"
    },
    {
        id: 10,
        title: "Career Readiness Toolkit: Pathways to Employability",
        date: "2026/04",
        image: crtCert,
        category: "Entrepreneurship & Career"
    }
];