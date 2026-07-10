import type { PracticumTask } from './types';

export const tasks: PracticumTask[] = [
  {
    id: 1,
    title: 'Voucher Web System',
    subtitle: 'City Education Office - Financial Assistance Program',
    description:
      "The Voucher Web System was developed to manage the City Education Office's process of handling " +
      'student financial assistance, from application to voucher generation and record tracking. It ' +
      'replaces the manual, paper-based process with a web-based system that lets staff manage student ' +
      'records, process vouchers, and keep track of transactions.',
    stack: [
      { label: 'Server', value: 'XAMPP v3.3.0' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Backend', value: 'PHP 8.2' },
      { label: 'Framework', value: 'CodeIgniter 4.0 - 4.7' },
      { label: 'Frontend', value: 'jQuery, Ajax, Bootstrap' },
    ],
    workIntro: 'The system was built in stages, with each part built on top of the last one.',
    work: [
      {
        title: 'Database Structure',
        detail:
          'A normalized database was designed to keep student, voucher, and school records organized and ' +
          'avoid duplicate or inconsistent data.',
      },
      {
        title: 'Initial UI/UX',
        detail:
          'Wireframes and page layouts were made with basic HCI principles in mind, so the system would be ' +
          'simple for CEDO staff to use.',
      },
      {
        title: 'Login and Authentication',
        detail:
          'A login system was built with session validation and password encryption to keep accounts secure.',
      },
      {
        title: 'Admin and User Roles',
        detail:
          'Different access levels were set up so admins and regular users only see the features meant for ' +
          'their role.',
      },
      {
        title: 'Dashboard',
        detail:
          'A dashboard was added so admins can view student records, voucher status, and system activity in ' +
          'one place.',
      },
      {
        title: 'Student and Voucher Management',
        detail:
          'Basic create, view, edit, and delete functions were built for managing student records and ' +
          'processing vouchers.',
      },
      {
        title: 'Signatories Management',
        detail: 'A module was added to manage the signatories needed to approve vouchers.',
      },
      {
        title: 'User Management',
        detail: 'Admins can create, edit, or remove user accounts through this module.',
      },
      {
        title: 'School Management',
        detail: 'A section was added to manage the schools involved in the program.',
      },
      {
        title: 'Archiving and Auditing',
        detail:
          'Old records can be archived, and an audit log tracks system activity for transparency.',
      },
    ],
    status:
      'The system is currently deployed and being tested by the CEDO staff. Feedback from this testing ' +
      'phase will guide the remaining refinements before full adoption.',
    images: ['/assets/project-images/fap-sys.png'], // screenshots of developed modules/dashboard
  },
];
