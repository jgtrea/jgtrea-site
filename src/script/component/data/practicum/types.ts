export type PracticumLogEntry = {
  week: string;
  period: string;
  summary: string;
  hours: number;
};

export type PracticumTask = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  stack: { label: string; value: string }[];
  workIntro?: string;
  work: { title: string; detail: string }[];
  status?: string;
  /* screenshot paths, e.g. imported assets */
  images: string[];
};
