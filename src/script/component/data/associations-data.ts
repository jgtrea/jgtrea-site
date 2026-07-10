export interface AssociationsData {
    id: number;
    title: string;
    issuer: string;
    date?: string;
    achievements?: string[];
}

export const AssociationsData: AssociationsData[] = [
    {
        id: 1,
        title: "Infotech Society",
        issuer: "Jhan Maurice C. De Roxas",
        date: "2024/01"
    },    
    {
        id: 2,
        title: "CyberSocPH",
        issuer: "Dr. Elizalde Javier Duran ",
        date: "2026/06"
    }
];