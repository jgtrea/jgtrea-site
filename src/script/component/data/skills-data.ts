export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Assembly', 'C', 'C++', 'C#', 'Kotlin', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'CodeIgniter 4', 'ASP.NET', 'jQuery', 'Ajax', 'Bootstrap 5'],
  },
  {
    category: 'Backend Services',
    items: ['Supabase', 'Firebase'],
  },
  {
    category: 'Databases & Tools',
    items: ['MySQL', 'Composer', 'XAMPP', 'Git', 'Figma', 'Vercel', 'Netlify', 'VMware/VirtualBox'],
  },
  {
    category: 'Operating Systems',
    items: ['Kali Linux', 'Red Hat Linux'],
  },
  {
    category: 'Hardware & Networking',
    items: ['Breadboarding', 'Bluetooth Low Energy', 'QR Code', 'Networking'],
  },
];
