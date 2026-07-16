export interface WorkData {
    id: number;
    company: string;
    title: string;
    year: string;
    tasks?: string[];
}

export const WorkData: WorkData[] = [
    {
        id: 1,
        company: "City Government of Biñan",
        title: "Full-Stack Developer Intern",
        year: "2026/04 - Present",
        tasks: [
            "Built a Voucher Generation System using CodeIgniter that enables CEDO to manage and print vouchers.",
            "Proctored training programs under Tech4ED, covering Microsoft Office applications, Canva design, and cyber hygiene. Performed hardware and software troubleshooting on training computers to ensure devices were ready for attendees."
        ]
    }
];
