export interface BadgesData {
    id: number;
    title: string;
    issuer: string;
    date?: string;
    achievements?: string[];
    image?: string;
    description?: string;
    category?: string;
    url?: string;
}

export const BadgesData: BadgesData[] = [
    {
        id: 1,
        title: "Ethical Hacker",
        issuer: "Cisco",
        date: "2025/03",
        category: "Cybersecurity",
        url: "https://www.credly.com/badges/6a70971c-9363-436a-a5ec-2238886f0a12/public_url"
    },
    {
        id: 2,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "2025/09",
        category: "Networking & IT Fundamentals",
        url: "https://www.credly.com/badges/e3ba2987-0347-448c-a645-deb542513e3e/public_url"
    },
    {
        id: 3,
        title: "CompTIA Tech+ Certification",
        issuer: "CompTIA",
        date: "2025/12",
        category: "Information Systems",
        url: "https://www.credly.com/badges/c1925ee4-f71f-4257-bb41-ef50e039178d/public_url"
    },
];