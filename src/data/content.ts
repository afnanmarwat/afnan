// ===========================
// HERO & ABOUT
// ===========================
// ===========================
// HERO SECTION CONTENT
// ===========================
export const heroContent = {
  greeting: "Hi, I'm",
  title: "Muhammad Afnan",
  role: "Full Stack Developer",
  description:
    "I build web applications that scale. From SaaS base and services base web applications, I deliver clean, efficient code with a focus on performance and user experience.",
  secondary:
    "",
  ctas: [
    {
      label: "View Projects",
      href: "#projects",
    },
    {
      label: "Download CV",
      href: "/Afnan_Resume.pdf", // 👈 Make sure this file is in /public
    },
  ],
  skills: [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Zustand", icon: "https://skillicons.dev/icons?i=html" }, // closest match
  ],
};

// ===========================
// ABOUT STATS
// ===========================
export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "SaaS Platforms", value: "4" },
  { label: "Technologies", value: "10+" },
];

// ===========================
// CONTACT INFO
// ===========================
export const contactInfo = [
  {
    label: "Email",
    value: "",
    href: "mailto:afnanmwt975@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "",
    href: "https://linkedin.com/in/mafnanmarwat",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "",
    href: "https://github.com/afnanmarwat",
    icon: "github",
  },
  {
    label: "WhatsApp",
    value: "",
    href: "https://wa.me/923137873975",
    icon: "message-circle",
  },
];

// ===========================
// SERVICES
// ===========================
export const services = [
  {
    title: "Frontend Development",
    icon: "monitor",
    description: "I build responsive, high-performance UIs with React, Next.js, and modern state management.",
    features: [
      "Pixel-perfect responsive design",
      "Optimized component architecture",
      "Smooth animations & micro-interactions",
      "Accessible & SEO-friendly markup",
    ],
  },
  {
    title: "Backend & API Development",
    icon: "server",
    description: "I create secure, scalable RESTful APIs and server logic using Node.js and Express.",
    features: [
      "JWT-based authentication & role control",
      "MongoDB schema design & aggregation",
      "API rate limiting & data validation",
      "Stripe payment & webhook integration",
    ],
  },
  {
    title: "Performance & SEO",
    icon: "search",
    description: "I optimize Core Web Vitals and ensure your app ranks well on search engines.",
    features: [
      "Next.js SSR/ISR for fast content",
      "Image & script lazy loading",
      "Structured data & meta tags",
      "Lighthouse score 90+",
    ],
  },
];

// ===========================
// SKILLS
// ===========================
export type SkillCategory = {
  title: string;
  icon: keyof typeof import("lucide-react");
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript",
      "Tailwind CSS", "HTML5", "CSS3", "Zustand",
      "Redux Toolkit", "Framer Motion"
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "Node.js", "Express.js", "MongoDB", "Mongoose",
      "REST APIs", "JWT", "Bcrypt", "SQL"
    ],
  },
  {
    title: "UI Libraries",
    icon: "Palette",
    skills: ["MUI", "ShadCN UI", "Chakra UI", "Material Tailwind"],
  },
  {
    title: "DevOps & Tools",
    icon: "Wrench",
    skills: ["Git/GitHub", "Vercel", "cPanel", "Postman", "Swagger", "VS Code"],
  },
];

// ===========================
// EXPERIENCE
// ===========================
export const experiences = [
  {
    company: "PhpTravels",
    role: "Frontend Team Lead",
    period: "May 2025 – Present",
    points: [
      "Lead front-end team across multiple projects",
      "Manage deployments on Vercel and cPanel",
      "Mentor trainees in React/Next.js best practices",
      "Oversee GitHub workflows and release cycles",
    ],
  },
  {
    company: "VeevoTech",
    role: "MERN Stack Developer",
    period: "Jan 2024 – May 2025",
    points: [
      "Contributes to the different SaaS platforms: QueryQ, Spext, Order System",
      "Developed chat filtering, Excel import, Meta templates",
      "Created WhatsApp-style product catalogues",
      "Implemented dashboards with charts & Google Maps",
    ],
  },
  {
    company: "NCAI, UET Peshawar",
    role: "Web Development Intern",
    period: "Sep 2022 – Mar 2023",
    points: [
      "Gained hands-on experience in full-stack development",
      "Worked on API integration, data visualization",
      "Learned secure auth and MongoDB design",
    ],
  },
];

// ===========================
// PROJECTS
// ===========================
export const projects = [
 {
  title: "Top Tier Travels (Customer Side)",
  description: "A full-scale travel booking platform with real-time search, multi-currency, and Stripe payments.",
  image: "/projectImages/toptier.png",
  tech: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux Toolkit", "Stripe", "i18n"],
  live: "https://toptiertravels.vip",
  details: `
    <p>I led the entire project from scratch — from initial planning and architecture to final deployment and maintenance.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I architected</strong> the platform using clean, modular code principles to ensure long-term scalability and maintainability</li>
      <li><strong>I built</strong> the hotel and tour search modules with advanced real-time filters, infinite scroll, and instant booking</li>
      <li><strong>I implemented</strong> dynamic currency conversion that automatically updates prices in 50+ languages</li>
      <li><strong>I integrated</strong> secure Stripe payments and <strong>automated</strong> invoice generation for instant receipts</li>
      <li><strong>I developed</strong> separate agent and customer dashboards with role-based access and booking management</li>
        <li><strong>I ensured</strong> full i18n support so users worldwide can book travel in their preferred language</li>
    </ul>
  `,
},

{
  title: "Top Tier Travels (Agent Side)",
  description: "A comprehensive agent dashboard for travel partners to monitor bookings, revenue, commissions, and performance metrics in real time.",
  image: "/projectImages/toptierAgent.png",
  tech: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux Toolkit", "Stripe", "i18n"],
  live: "https://toptiertravels.vip",
  details: `
    <p>I designed Agent Dashboard from the ground up to give travel partners full visibility into their business performance.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I developed</strong> real-time KPI cards showing total sales revenue, earned commissions, and partner booking metrics</li>
      <li><strong>I implemented</strong> month-over-month performance tracking with comparison indicators (e.g., “+0% vs last month”) to highlight growth trends</li>
      <li><strong>I integrated</strong> secure Stripe payment data to display accurate, live revenue and commission breakdowns</li>
      <li><strong>I built</strong> role-based access so agents only see their own bookings and earnings, ensuring data privacy</li>
      <li><strong>I optimized</strong> data fetching with React Query to keep the dashboard fast and responsive, even with large booking histories</li>
      <li><strong>I ensured</strong> full i18n support so agents worldwide can use the dashboard in their preferred language</li>
    </ul>
  `,
},
{
  title: "Customer Relationship Manager (CRM Pro)",
  description: "A full-stack customer relationship management platform with contact tracking, interaction history, task automation, and real-time analytics.",
  image: "/projectImages/crmsystem.png",
  tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Context API", "Chart.js", "Tailwind CSS", "Axios"],
  live: "https://your-crm-pro.vercel.app",
  details: `
    <p>I designed and developed CRM Pro from the ground up to empower sales teams and small businesses to manage customer relationships effectively and drive growth.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I built</strong> a complete customer lifecycle workflow — from lead capture and contact organization to follow-up scheduling and deal pipeline tracking</li>
      <li><strong>I implemented</strong> CSV import/export functionality to easily migrate contacts and sync data across platforms without manual entry</li>
      <li><strong>I developed</strong> a dynamic analytics dashboard using Chart.js, featuring funnel visualizations, activity trends, and conversion metrics to guide strategic decisions</li>
      <li><strong>I added</strong> smart filtering and search capabilities (by name, company, status, date range, or custom tags) for instant access to relevant customer records</li>
      <li><strong>I architected</strong> the full MERN stack backend with RESTful APIs, role-based access control, JWT authentication, and MongoDB for secure, scalable data storage</li>
      <li><strong>I focused</strong> on user experience and responsiveness, ensuring seamless performance across devices while maintaining clean, modular code for future scalability</li>
    </ul>
  `,
},
{
  title: "QueryQ",
  description: "A centralized business query management system with chat filtering, Meta-compliant templates, and automation for efficient customer support.",
  image: "/projectImages/queryq.png",
  tech: ["React.js", "Node.js", "MongoDB", "Microservices", "event-driven architecture", "Context API", "Zustand", "Axios", "Tailwind CSS"],
  live: "https://veevotech.com/queryq",
  details: `
    <p>I contribute to the  QueryQ as a full-stack SaaS solution to modernize how businesses handle customer queries at scale.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I Contribute</strong> to query Conversation module with real-time chat filtration by status: open, closed, assigned, priority, hold, and unanswered queries functionality</li>
      <li><strong>I integrated</strong> Meta-approved message templates to ensure all outbound communications comply with WhatsApp Business policies</li>
      <li><strong>I added</strong> bulk contact import functionality to Its Contact module using Excel files, allowing teams to onboard thousands of customers in seconds</li>
      <li><strong>I designed</strong> an automated notification system that alerts agents about new queries, status changes, and pending actions</li>
       <li><strong>I helped evolve</strong> the system toward a <strong>microservices architecture</strong>, decoupling core features like notifications, message processing, and contact management into independent services for better scalability</li>
    <li><strong>I applied event-driven patterns</strong> using lightweight message queues to handle real-time updates — ensuring reliable, asynchronous communication between modules without tight coupling</li>
      <li><strong>I implemented</strong> a query automation module to instantly respond to common FAQs, reducing manual workload by up to 40%</li>
      <li><strong>I architected</strong> the backend with Node.js and MongoDB to support high-volume message traffic with low latency</li>
    </ul>
  `,
},
  {
  title: "Spext",
  description: "An SMS and notification platform for businesses, featuring a WhatsApp-style product catalogue and real-time analytics dashboard.",
  image: "/projectImages/spex.png",
  tech: ["React.js", "Node.js", "MongoDB","Microservices", "event-driven architecture", "Chart.js", "Google Maps API", "Tailwind CSS", "Axios"],
  live: "https://veevotech.com/spext",
  details: `
    <p>I contributed to Spext as a full-stack developer, focusing on frontend architecture and data visualization for business communication analytics.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I designed and implemented</strong> the full product catalogue module, allowing businesses to showcase items just like WhatsApp’s native catalogue feature</li>
      <li><strong>I built</strong> an interactive analytics dashboard using Chart.js to visualize key SMS metrics: sent, delivered, failed, and received messages</li>
      <li><strong>I integrated</strong> Google Maps API to display geographic delivery insights and location-based performance analytics</li>
      <li><strong>I developed</strong> a responsive, user-friendly UI with Tailwind CSS and React for campaign management and real-time reporting</li>
      <li><strong>I worked with the backend team</strong> to consume RESTful APIs for message logs, contact lists, and catalogue data</li>
    </ul>
  `,
},
  {
  title: "Order Management System (Order Pulse)",
  description: "A full-stack order tracking platform with real-time monitoring, offline voice confirmation, and interactive analytics dashboard.",
  image: "/projectImages/orderSystem.png",
  tech: ["React.js", "Node.js", "MongoDB", "Context API", "Chart.js", "Tailwind CSS", "Axios"],
  live: "https://afnan-ordersystem.vercel.app",
  details: `
    <p>I designed and developed the Order Pulse system from the ground up to help businesses manage, track, and verify customer orders efficiently.</p>
    <ul class="mt-2 space-y-1 text-sm list-disc pl-5 text-white/80">
      <li><strong>I built</strong> a complete order lifecycle flow — from creation and status updates to history tracking and exportable reports</li>
      <li><strong>I implemented</strong> Excel and PDF import/export functionality to streamline bulk order management and data portability</li>
      <li><strong>I developed</strong> an interactive analytics dashboard using Chart.js, featuring pie, line, and doughnut charts to visualize sales trends and order performance</li>
      <li><strong>I added</strong> advanced filtering options (daily, weekly, monthly, yearly, and custom date ranges) for precise order and customer insights</li>
      <li><strong>I architected</strong> the full MERN stack backend with RESTful APIs, secure JWT authentication, and MongoDB for scalable data handling</li>
      <li><strong>I focused</strong> on performance and modularity, ensuring the system remains fast and maintainable even with large order volumes</li>
    </ul>
  `,
},


];

// ===========================
// TESTIMONIALS
// ===========================
export const testimonials = [
  {
    name: "Sarah Khan",
    title: "Product Manager, VeevoTech",
    initials: "SK",
    quote: "Afnan transformed our QueryQ dashboard from a clunky UI into a smooth, real-time experience. His attention to performance and clean architecture made a huge difference.",
  },
  {
    name: "Omar Raza",
    title: "CTO, Top Tier Travels",
    initials: "OR",
    quote: "He single-handedly built our entire booking platform — from Stripe integration to multi-language support. Reliable, fast, and deeply technical.",
  },
  {
    name: "Ali Hassan",
    title: "Frontend Lead, PhpTravels",
    initials: "AH",
    quote: "As a team lead, Afnan doesn’t just code — he elevates everyone around him. His modular approach saved us weeks in onboarding and debugging.",
  },
  {
    name: "Zara Mehmood",
    title: "Founder, Spext",
    initials: "ZM",
    quote: "The WhatsApp-style catalogue he built for Spext became our most loved feature. Clients say it feels native — that’s the mark of great engineering.",
  },
];


// data/content.ts

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image?: string; // optional: e.g., "/certs/aws.png"
};

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Jan 2024",
    credentialUrl: "https://www.credly.com/badges/your-badge-link",
    image: "https://unsplash.com/photos/close-up-business-man-signing-contract-making-a-deal-classic-business-JV7oxKXoy80", // optional
  },
  {
    id: "2",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB",
    date: "Mar 2024",
    credentialUrl: "https://www.credly.com/badges/...",
    image: "https://unsplash.com/photos/close-up-business-man-signing-contract-making-a-deal-classic-business-JV7oxKXoy80",
  },
  {
    id: "3",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta via Coursera",
    date: "Nov 2023",
    credentialUrl: "https://coursera.org/verify/...",
    image: "https://unsplash.com/photos/close-up-business-man-signing-contract-making-a-deal-classic-business-JV7oxKXoy80",
  },
  // Add more as needed
];