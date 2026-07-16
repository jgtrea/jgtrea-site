import type { PracticumTask } from './types';

export const tasks: PracticumTask[] = [
  {
    id: 1,
    title: 'Voucher Web System',
    subtitle: 'City Education Office - Financial Assistance Program',
    period: 'May 29, 2026 - July 10, 2026',
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
        title: 'Admin, Dev, and User Roles',
        detail:
          'Different access levels were set up so admins, devs, and regular users only see the features ' +
          'meant for their role.',
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
    screens: [
      {
        group: 'Admin Side',
        intro:
          'Admins have full access to the system: managing records, generating vouchers, and overseeing ' +
          'users, archives, and audit logs.',
        items: [
          {
            src: '/assets/prac-sys/ad-dash.png',
            caption:
              'Dashboard - Gives admins an overview of student totals, printed vouchers, and the most ' +
              'recent student records.',
          },
          {
            src: '/assets/prac-sys/ad-stud.png',
            caption:
              'Student Management - Used to search, filter, import, and add student financial assistance ' +
              'records.',
          },
          {
            src: '/assets/prac-sys/ad-school.png',
            caption:
              'School Management - Used to maintain junior and senior high school data, with import and ' +
              'export options.',
          },
          {
            src: '/assets/prac-sys/ad-sig.png',
            caption:
              'Signatories Management - Used to manage the active signatories whose names and positions ' +
              'appear on vouchers.',
          },
          {
            src: '/assets/prac-sys/ad-gen.png',
            caption:
              'Voucher Generation - Used to search, filter, export, and print student vouchers.',
          },
          {
            src: '/assets/prac-sys/ad-user.png',
            caption:
              'User Management - Used to manage staff accounts, their access levels, and account status.',
          },
          {
            src: '/assets/prac-sys/ad-other.png',
            caption:
              'Other Options - Used to manage custom dropdown values for the suffix, prefix, and degree ' +
              'fields.',
          },
          {
            src: '/assets/prac-sys/ad-arch.png',
            caption:
              'Archive - Used to view archived student records by school year, archive current data, and ' +
              'export records.',
          },
          {
            src: '/assets/prac-sys/ad-aud.png',
            caption:
              'Audit Logs - Used to track account activity and voucher changes, searchable by action, ' +
              'date, and user.',
          },
        ],
      },
      {
        group: 'User Side',
        intro:
          'Regular users get a simplified view focused on day-to-day work: managing students, generating ' +
          'vouchers, and reviewing their own activity.',
        items: [
          {
            src: '/assets/prac-sys/us-stud.png',
            caption:
              'Student Management - Used to manage student records without the admin-only import and ' +
              'system controls.',
          },
          {
            src: '/assets/prac-sys/us-gen.png',
            caption: 'Voucher Generation - Used to search, export, and print student vouchers.',
          },
          {
            src: '/assets/prac-sys/us-log.png',
            caption:
              "My Logs - Shows the user's own account activity, such as logins and voucher changes.",
          },
        ],
      },
      {
        group: 'Deployment at CEDO',
        intro:
          'On July 10, 2026, the system was deployed at the City Education Office. It was configured ' +
          'locally through a host machine in their office, and the client was given time to test the ' +
          'system hands-on.',
        items: [
          {
            src: '/assets/blog/deploy3.jpg',
            caption:
              'On-site Testing - Walking the CEDO staff through the system and letting them try it on ' +
              'their own workstation.',
          },
          {
            src: '/assets/blog/deploy1.jpg',
            caption:
              'Turnover - The team with the City Education Officer after presenting the deployed system.',
          },
          {
            src: '/assets/blog/deploy2.jpg',
            caption: 'The team at the City Education Office to mark the deployment of the system.',
          },
        ],
      },
    ],
    images: ['/assets/project-images/fap-sys.png'],
  },
  {
    id: 2,
    title: 'Ticketing System',
    period: 'June 13, 2026 - Present',
    description:
      'A ticketing system assigned as the next task after the Voucher Web System, intended to track and ' +
      'manage requests and reported issues.',
    stack: [],
    work: [],
    images: [],
  },
];
