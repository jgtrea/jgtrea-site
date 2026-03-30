export interface BadgesData {
    id: number;
    title: string;
    issuer: string;
    date?: string;
    achievements?: string[];
}

export const BadgesData: BadgesData[] = [
    {
        id: 1,
        title: "Ethical Hacker",
        issuer: "Cisco",
        date: "3/2025"
    },    
    {
        id: 2,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "9/2025"
    },
];