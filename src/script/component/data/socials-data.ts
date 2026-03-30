export interface Social {
  name: string;
  url: string;
  icon: 'email' | 'github' | 'linkedin' | 'website' | 'resume';
}

export const socials: Social[] = [
  {
    name: 'Email',
    url: 'mailto:jangabriel.formal@gmail.com',
    icon: 'email',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jgtrea',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jgtrea/',
    icon: 'linkedin',
  },
];

export const footerText = 'Jan Gabriel Rea';

export const resumeUrl = '/Jan-Gabriel-Rea_CV.pdf';