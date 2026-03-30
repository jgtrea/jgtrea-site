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
        title: "Google Cloud Computing",
        issuer: "Google Cloud Skills Boost",
        date: "02/2024"
    },   
    {
        id: 2,
        title: "Certified Ethical Hacker (CEH)",
        issuer: "Cisco Networking Academy",
        date: "03/2025"
    },    
    {
        id: 3,
        title: "Cisco Certified Network Associate Routing and Switching (CCNA)",
        issuer: "Cisco Networking Academy",
        date: "09/2025"
    },
];