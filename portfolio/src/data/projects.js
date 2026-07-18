export const projects = [
  {
    id: 'project-01',
    eyebrow: 'Case study — 01 · Full-Stack Web Application',
    title: 'Library Management System',
    tagline: "Designed and developed a complete library management platform to simplify book tracking, member management, and borrowing operations.",
    paragraphs: [
      "The project replaces manual record keeping with a centralized web application where administrators can manage books, members, and borrowing history from a single dashboard. The primary goal was to improve data organization while reducing repetitive administrative tasks.",

      "I built a responsive React frontend connected to a Node.js and Express backend with a MySQL database. The application supports authentication, CRUD operations, search functionality, and a structured dashboard while following reusable component architecture."
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "CSS"
    ],
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'View code', href: '#' },
    ],
    url: 'library-management-system.app/dashboard/overview',
    mockup: 'dashboard',
    reverse: false,
  },
  {
    id: 'project-02',
    eyebrow: 'Case study — 02 · Healthcare Platform',
    title: 'Blood Donation System',
    tagline: "Connecting blood donors and recipients through a secure and responsive web application.",
    paragraphs:[
      "Finding compatible blood donors quickly can be difficult during emergencies. This application helps users register as donors, search by blood group, and submit blood requests through an easy-to-use interface.",

      "Firebase Authentication and Firestore were used to manage users and real-time data. Special attention was given to Firestore security rules, responsive layouts, and organizing donor information efficiently."
    ],

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Firestore"
    ],
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'View code', href: '#' },
    ],
    url: 'fielding.co/checkout',
    mockup: 'commerce',
    reverse: true,
  },
  {
    id: 'project-03',
    eyebrow: 'Case study — 03 · Frontend Development',
    title: 'Survey Form',
    tagline: "Building an accessible and responsive survey experience using semantic HTML and modern CSS.",
    paragraphs: [
      "The objective of this project was to create a clean and accessible form interface that works consistently across desktop and mobile devices while following HTML best practices.",

      "The project focuses on responsive layouts, client-side validation, semantic markup, and usability improvements, providing a strong foundation for larger frontend applications."
    ],
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript"],
    links: [
      { label: 'Case study', href: '#' },
      { label: 'View code', href: '#' },
    ],
    url: 'portside.internal/inventory',
    mockup: 'admin',
    reverse: false,
  },
];