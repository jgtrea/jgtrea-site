export interface CertificateData {
    id: number;
    title: string;
    issuer: string;
    date?: string;
    achievements?: string[];
}

export const CertificateData: CertificateData[] = [
    {
        id: 1,
        title: "CodeChum Python Course Certificate",
        issuer: "CodeChum",
        date: "11/2022"
    },
    {
        id: 2,
        title: "CompTIA Tech+ Certification",
        issuer: "CompTIA",
        date: "12/2025"
    },
    {
        id: 3,
        title: "Digital Transformtion and Information Systems",
        issuer: "Ms. Ethel Grace Verana",
        date: "5/2026"
    },
    {
        id: 4,
        title: "Web Development, Data Analytics, and Emerging Technologies",
        issuer: "Engr. Kevin Yu",
        date: "5/2026"
    },
    {
        id: 5,
        title: "Decode the Data, Defend the Network: An Introduction to Data Analytics and Network Security",
        issuer: "Ms. Ethel Grace Verana",
        date: "5/2026"
    },
    {
        id: 6,
        title: "Amazon - Full Stack Web Development",
        issuer: "Coursera",
        date: "6/2026"
    },
    {
        id: 7,
        title: "Beyond the Breach: Leadership and Cybersecurity in the Age of Digital Transformation",
        issuer: "Joshua Fil V. Evasco",
        date: "6/2026"
    }
];