import type { PracticumLogEntry } from './types';

export const requiredHours = 486;

export const practicumLog: PracticumLogEntry[] = [
  { week: 'Week 1', period: '', summary: 'Onboarding and environment setup', hours: 16 },
  { week: 'Week 2', period: '', summary: 'Login API, backend setup, Excel import development', hours: 40 },
  { week: 'Week 3', period: '', summary: 'Admin controllers, database integration, Tech4ED trainings', hours: 40 },
  { week: 'Week 4', period: '', summary: 'Voucher processing, archive management, technical consultation', hours: 40 },
  { week: 'Week 5', period: '', summary: 'Multi-tab management, archive interface rebuild, school management', hours: 32 },
  { week: 'Week 6', period: '', summary: 'Bulk import, voucher queue, network hosting setup', hours: 40 },
  { week: 'Week 7', period: '', summary: 'User profile system, background processing, sidebar restructuring', hours: 32 },
  { week: 'Week 8', period: '', summary: 'System revisions, testing, Tech4ED training support', hours: 32 },
  { week: 'Week 9', period: '', summary: 'Revisions, TechTalk seminar, UI/UX polishing', hours: 32 },
  { week: 'Week 10', period: '', summary: 'Documentation, user manual drafting, database-driven dropdowns', hours: 32 },
  { week: 'Week 11', period: '', summary: 'User manual, validation and testing, reference commits, client deployment and feedback adjustments', hours: 32 },
];

export const totalHours = practicumLog.reduce((sum, entry) => sum + entry.hours, 0);
