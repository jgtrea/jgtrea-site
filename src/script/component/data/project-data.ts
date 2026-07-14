export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  imagePosition?: string;
  url?: string;
  github?: string;
  stack?: string[];
}

export const ProjectData: ProjectItem[] = [
  {
    id: 1,
    image: "/assets/project-images/icyheights.png",
    imagePosition: "bottom center",
    title: "Icy Heights",
    description: "A simple game that has a penguin with a jetpack fly through hoops.",    
    github: "https://github.com/SuperficialFlow/IcyHeights",
    stack: ["C#"]
  },
  {
    id: 2,
    image: "../../assets/project-images/orbit.png",
    title: "Orbit",    
    description: "A social media platform meant to mimic Twitter, by integrating a custom TwitterCloneAPI, using a Kurzgesagt-inspired flat design.",
    url: "https://orbit-network.netlify.app/",
    github: "https://github.com/SuperficialFlow/Orbit",
    stack: ["JavaScript", "Html", "CSS"]
  },
  {
    id: 3,
    image: "/assets/project-images/jukeboxd.png",
    title: "Jukeboxd",    
    description: "New Brutalism styled e-commerce platform concept that serves as a dedicated marketplace for vinyl collectors and musicians to buy and sell records.",    
    github: "https://github.com/cfd-alcantara/Jukeboxd",
    stack: ["ASP.NET", "C#", "CSS", "JavaScript"]
  },
  {
    id: 5 ,
    image: "/assets/project-images/rubiks-cube.png",
    title: "Rubik-s-Cube-Cipher",
    description: "Multi-block permutation cipher that combines the combinatorial state space of the Rubik’s Cube with a cryptographically secure 256-bit random key. ",
    github: "https://github.com/JannersLSR/Rubik-s-Cube-Cipher",
    stack: ["Python"]
  },
  {
    id: 6,
    image: "/assets/project-images/clock-in.png",
    title: "ClockIn",    
    description: "Attendance monitoring system that tracks employee clock in and out. Using a 3-Factor Verification System (QR Code, WiFi, and BLE Proximity) to secure logging work hours.",    
    stack: ["JavaScript", "Html", "CSS", "QR Code", "Network", "Bluetooth Low Energy"]
  },
  {
    id: 7,
    image: "/assets/project-images/fap-sys.png",
    title: "Voucher Web System",
    description: "Voucher system for managing and distributing digital vouchers among high-school students.",
    stack: ["PHP 8.2", "CodeIgniter 4", "Composer", "MySQL", "jQuery", "Bootstrap 5"]
  }
];