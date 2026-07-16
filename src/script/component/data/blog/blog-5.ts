import type { BlogPost } from './types';

export const blog5: BlogPost = {
  id: 5,
  title: "Capstone Project: CLOCK IN, A Proximity Aware Authentication Using Bluetooth Low Energy Beacons for Teaching Employees",
  date: "2025/08",
  readTime: 15,
  content: `## Overview
For our fourth year capstone project, starting August 2025, our team of four built CLOCK IN, an attendance monitoring platform for teaching employees that verifies presence through three factors: BLE beacon proximity, QR code scanning, and institutional Wi-Fi connectivity. The system comes in two parts: a mobile application that teachers use to clock in, and a web-based administrative dashboard where attendance records are managed. This post walks through why we built it, what problems it answers, and what it took to bring it from paper to working hardware in real classrooms.
## Why Attendance, of All Things?
Attendance sounds like a solved problem until you look at how it's actually handled. In many schools, teacher attendance still runs on logbooks, punch clocks, or standalone biometric devices that don't talk to any other system. Records are slow to consolidate, easy to falsify, and painful to audit. For an institution, that's not a clerical nuisance. Instructional time is the single biggest resource a school manages, and it's only as accountable as the records behind it. CLOCK IN's purpose is to make presence verifiable and records instant, without adding friction to a teacher's day.
## The Problem
Traditional methods share one core weakness: they confirm that someone recorded attendance, not that the right person was in the right room. Logbooks accept any handwriting. Shared credentials and buddy punching defeat card systems. Even biometric scanners only prove someone stood at the device, then the data often sits in isolation, requiring manual export and reconciliation. Administrators end up reviewing tardiness and absences days after the fact, and teachers have no transparent view of their own records. We designed CLOCK IN around a stricter question: can the system prove, at clock-in time, that this specific teacher is physically inside their assigned classroom?
## What the System Sets Out to Do
To Modernize: replace manual logs and disconnected devices with a centralized digital platform, so records exist the moment they're made and reports generate themselves instead of being compiled by hand.
To Secure: make proxy attendance impractical by layering three independent checks: BLE proximity proves location, the QR scan proves deliberate action, and the Wi-Fi record ties the event to the institutional network.
To Stay Fair: handle real-world failures gracefully. A clock-in made outside the institutional network is flagged for review, not rejected, so a network outage never punishes a teacher who is actually present.
To Stay Consistent: cover non-traditional schedules too. For online or modular classes, teachers submit a class session image through their web portal, keeping one attendance trail whether class happens on campus or remotely.
To Protect Data: align the system with the OWASP Mobile Application Security Verification Standard (MASVS) and Philippine technology laws, with role-based access control deciding exactly who can see and modify records.
## How Clocking In Works
The mobile application, built with Kotlin and Jetpack Compose, is the teacher's primary interface. After signing in, teachers see their assigned schedules and attendance status for the day, with in-app notifications for upcoming classes. Clocking in is a multi-layer sequence: the device first listens for the BLE beacon installed in the classroom, confirming the teacher is within the configured proximity; the teacher then scans a QR code to finalize the record; and the app notes whether the device is on the institutional Wi-Fi at that moment. Only then is the attendance record transmitted to the centralized database.
img:/assets/blog/clockin-mobile-home.jpg|CLOCK IN mobile home interface, showing the current class, live beacon status, and notifications
img:/assets/blog/clockin-mobile-qr.jpg|QR scanner interface used to finalize the clock-in after proximity verification
## The Administrative Side
The web dashboard gives administrators a live, centralized view of every attendance record. They can monitor real-time logs, review tardiness and absence reports, generate reports, and manage teacher accounts, with role-based access control keeping administrative functions restricted to authorized personnel. Teachers get web accounts too; this is where online and modular class sessions are verified through the image submission module.
img:/assets/blog/clockin-web-home.png|Web section overview showing which teachers are in which classroom in real time
img:/assets/blog/clockin-web-dashboard.png|Administrative dashboard for attendance logs, reports, and account management
## Under the Hood
On the software side, the mobile app pairs Kotlin and Jetpack Compose with ML Kit for QR scanning. The backend runs on Supabase: PostgreSQL 15 as the main database, Supabase Auth for tokens, password resets, and sessions, and Supabase Realtime for notifications and schedule updates. The web client is built on JavaScript, HTML5, and CSS3, hosted on Vercel.
For hardware, BLE beacons were deployed across six classrooms for the initial phase, mounted on the ceiling of each room to keep furniture and passing students out of the signal path. On the client side, the app runs on Android 8.0 or higher with BLE support, Wi-Fi, GPS enabled (an Android requirement for BLE scanning), and a rear camera for the QR step.
## The Challenges
The hardest problems weren't in code. Radio signals in a room full of moving people are messy, and raw signal strength (RSSI) thresholds proved too unreliable to trust on their own. So we built a custom tester application and calibrated by physically measuring classroom sizes and detection distances in meters. On-site testing showed seven to eight meters was enough for reliable detection in a standard classroom; we configured the final detection distance to fifteen meters to absorb interruptions while staying well within the hardware's dependable range. The other constant tension was strictness versus fairness: every additional verification layer is another thing that can fail on an honest user, which is why the system flags suspicious records for human review instead of hard-rejecting them.
## What This Project Taught Us
CLOCK IN pulled together everything the four of us learned across the program: mobile development, backend and database design, network behavior, security standards, and the very physical work of mounting and calibrating hardware in real classrooms. More than anything, it taught us that a system's real test isn't whether the happy path works; it's whether the design stays fair and dependable when the network drops, the signal bounces, or a user does something unexpected.`,
};
