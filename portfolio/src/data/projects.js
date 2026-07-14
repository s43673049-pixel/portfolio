export const projects = [
  {
    id: 'project-01',
    eyebrow: 'Case study — 01 · SaaS Dashboard',
    title: 'Meridian',
    tagline: "Turning a spreadsheet-shaped product into something a team could actually read in a morning stand-up.",
    paragraphs: [
      "Meridian's analytics suite had grown organically for three years — every new metric got bolted onto an already-crowded table. My job was to rebuild the dashboard layer: a component system flexible enough for a hundred metric types, but opinionated enough that no two screens looked like they'd been designed by different teams.",
      'I built a composable widget grid, a chart library wrapper on top of D3 with consistent motion and empty states, and a virtualized table that stayed smooth past 50,000 rows on mid-range laptops.',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Zustand', 'Vite'],
    metrics: [
      { value: '−61%', label: 'dashboard load time' },
      { value: '50k+', label: 'rows rendered smoothly' },
      { value: '96', label: 'Lighthouse performance' },
    ],
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'View code', href: '#' },
    ],
    url: 'meridian.app/dashboard/overview',
    mockup: 'dashboard',
    reverse: false,
  },
  {
    id: 'project-02',
    eyebrow: 'Case study — 02 · Commerce Frontend',
    title: 'Fielding',
    tagline: "A D2C outdoor-gear brand whose checkout was quietly losing them a third of their traffic.",
    paragraphs: [
      "Fielding came to me with a fast, pretty homepage and a checkout flow that fell apart on mobile. I rebuilt the storefront front end from product listing to payment confirmation, focused on perceived speed — optimistic UI on add-to-cart, skeleton states instead of spinners, and a checkout that never made the customer wait for a network round trip to feel progress.",
      "Images were the biggest lever: adaptive formats, lazy loading tuned to scroll velocity, and a custom zoom component that didn't tank Core Web Vitals.",
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Shopify API', 'Framer Motion'],
    metrics: [
      { value: '+34%', label: 'checkout completion' },
      { value: '1.2s', label: 'largest contentful paint' },
      { value: '−28%', label: 'mobile bounce rate' },
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
    eyebrow: 'Case study — 03 · Admin Panel',
    title: 'Portside',
    tagline: "Internal tooling for a logistics team who'd been running warehouse ops out of a shared spreadsheet.",
    paragraphs: [
      'Portside is the least glamorous project here and probably the one I\'m proudest of. No one "wows" over an admin panel, but a warehouse team uses this thing eight hours a day — so every interaction had to be fast, keyboard-friendly, and forgiving of mistakes. Bulk actions, inline editing, undo everywhere, and a permission system that stayed out of people\'s way until it mattered.',
      "I built the whole thing around a shared design token system so the client's next three internal tools could be styled from the same base without starting over.",
    ],
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'REST + WebSockets', 'Storybook'],
    metrics: [
      { value: '6.5hrs', label: 'saved per week, per user' },
      { value: '140+', label: 'daily active operators' },
      { value: '0', label: 'spreadsheets left in prod' },
    ],
    links: [
      { label: 'Case study', href: '#' },
      { label: 'View code', href: '#' },
    ],
    url: 'portside.internal/inventory',
    mockup: 'admin',
    reverse: false,
  },
];