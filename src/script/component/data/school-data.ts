export interface SchoolData {
    id: number;
    school: string;
    title: string;
    year: string;
    achievements?: string[];
}

export const SchoolData: SchoolData[] = [
    {
        id: 1,
        school: "Mater Ecclesiae School, San Pedro, Laguna",
        title: "JHS & SHS Graduate",
        year: "2018/07 - 2022/04",
        achievements: [
            "CREOTEC Work Immersion Participant"
        ]
    },
    {
        id: 2,
        school: "Mapua Malayan Colleges of Laguna",
        title: "Bachelor of Science in Information Technology",
        year: "2022/07 - Present",
        achievements: [
            "Maintained Dean's Lister status for three consecutive academic years."
        ]
    }
];