export const profile = {
  name: "Vinit Niranjan Potdar",
  shortName: "Vinit Potdar",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
  tagline:
    "I build full-stack platforms and AI systems end to end — from first idea to production.",
  location: "Pune, India · Open to remote worldwide",
  email: "potdarvinit077@gmail.com",
  phone: "+91 8262920550",
  linkedin: "https://www.linkedin.com/in/vinit-potdar-1314a9332",
  telegram: "https://t.me/hello_vinitt",
  instagram: "https://instagram.com/_yrrr_vinit",
  cv: "/Vinit-Potdar-CV.pdf",
  startup: {
    name: "VAYN",
    line: "Building VAYN with a global team of ambitious developers.",
  },
};

export const stats = [
  { value: "20+", label: "Applications delivered" },
  { value: "4", label: "Industry projects" },
  { value: "3+", label: "Years shipping" },
  { value: "97.35%", label: "Best model accuracy" },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
}

export const projects: Project[] = [
  {
    name: "E-commerce Platform",
    tagline: "Full-stack online store",
    description:
      "Complete e-commerce product built end to end: Spring Boot REST APIs powering a React storefront — product catalog with search, cart and checkout flow, order management, JWT-based authentication, and an admin dashboard. MySQL persistence, deployed and handed over as a working product.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST API"],
    metrics: ["Full product flow", "Secure auth", "Admin dashboard"],
  },
  {
    name: "BugSense",
    tagline: "AI-powered bug tracker",
    description:
      "n8n workflow automation auto-triages incoming issues the moment they are filed; a RAG pipeline over vector embeddings semantically matches new issues against past resolved bugs to suggest fixes. Retrieval architecture over real data.",
    tech: ["n8n", "RAG", "Vector Embeddings", "Python", "LangChain"],
    metrics: ["Auto-triage", "Semantic matching"],
  },
  {
    name: "HMPV Disease Detection",
    tagline: "ML / NLP disease detection",
    description:
      "NLP-based symptom extraction from clinical reports with NLTK; trained Random Forest, SVM, and XGBoost classifiers. End-to-end ML pipeline: data cleaning with Pandas, model training and evaluation with scikit-learn, served through a Flask + MySQL backend.",
    tech: ["Python", "scikit-learn", "NLTK", "Flask", "MySQL"],
    metrics: ["97.35% test accuracy"],
  },
  {
    name: "Voxa AI Receptionist",
    tagline: "AI voice receptionist platform",
    description:
      "Production-style platform: Express backend with 17 REST routes, Supabase PostgreSQL with row-level security, and Ava — a Vapi voice agent that answers calls, retrieves answers from a knowledge base, checks live availability and books appointments. Analytics dashboard plus n8n workflows for confirmations and alerts.",
    tech: ["Express", "Supabase", "Vapi", "React", "n8n"],
    metrics: ["17 REST routes", "Voice AI"],
  },
];

export const experience = [
  {
    title: "Freelance Full-Stack Developer",
    org: "Self-employed",
    period: "2023 — Present",
    points: [
      "Delivered 20+ applications end to end — including government projects: requirements, UI, backend APIs, deployment, handover.",
      "Work directly with clients across industries, owning products from idea to production.",
      "Stack: Java/Spring Boot, React, TypeScript, Python, REST APIs, MySQL/MongoDB.",
    ],
  },
  {
    title: "Backend Developer",
    org: "Contract — Agency Client",
    period: "Nov 2025 — Mar 2026",
    points: [
      "Served as backend developer for an agency client; built and shipped backend systems and production APIs.",
      "Delivered production backend features in a distributed team workflow.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    org: "Dream Technology",
    period: "Jan 2023 — Apr 2023",
    points: [
      "Full-stack development internship, working remotely with a global team.",
      "Built and shipped web features across frontend and backend.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Engineering",
    school: "ISBM College of Engineering, Pune",
    period: "2024 — 2027",
    detail: "",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "",
    period: "2021 — 2024",
    detail: "84%",
  },
];

export const achievements = [
  {
    title: "Harvard Aspire Leaders Program",
    detail: "Leadership certificate through the Aspire Institute.",
  },
  {
    title: "4× 1st Rank — Project Exhibitions",
    detail: "Secured first rank four times across project exhibitions.",
  },
  {
    title: "Winner — Avishkar 2025",
    detail: "Winner of Avishkar in 2025.",
  },
  {
    title: "Hackathons",
    detail: "Active participant across hackathons and build competitions.",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  Backend: ["Spring Boot", "REST APIs", "Microservices", "GraphQL", "Node.js", "Express", "FastAPI", "Flask", "n8n"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "WebSockets"],
  "AI / ML": ["RAG", "Vector Embeddings", "LangChain", "OpenAI APIs", "scikit-learn", "NLTK", "OpenCV", "Vapi voice AI"],
  "Data & Infra": ["MySQL", "Oracle", "MongoDB", "Supabase", "Git", "Docker", "AWS", "CI/CD", "Redis", "Vercel"],
};

/* ---------- Vinit's Friend knowledge base ---------- */
export interface KBChunk {
  id: string;
  keywords: string[];
  text: string;
}

export const knowledgeBase: KBChunk[] = [
  {
    id: "vayn",
    keywords: ["vayn", "startup", "founder", "company", "team", "building"],
    text: "Vinit is building VAYN with a global team of ambitious developers — a startup with international ambitions.",
  },
  {
    id: "bio",
    keywords: ["who", "about", "vinit", "introduce", "background", "summary"],
    text: "Vinit Niranjan Potdar is a Software Engineer, Full-Stack Developer and AI Engineer from Pune, India. He is a final-year Computer Engineering student who builds full-stack platforms and AI systems end to end, and he is open to remote work worldwide.",
  },
  {
    id: "skills",
    keywords: ["skill", "stack", "tech", "technology", "language", "framework", "tools"],
    text: "Vinit's stack: Java, Python, TypeScript, JavaScript, SQL; Spring Boot, REST APIs, microservices, GraphQL, Node.js, Express, FastAPI, Flask, n8n automation; React.js, Next.js, Tailwind CSS, WebSockets; RAG, vector embeddings, LangChain, OpenAI APIs, scikit-learn, NLTK, OpenCV, Vapi voice AI; MySQL, Oracle, MongoDB, Supabase, Git, Docker, AWS, CI/CD, Redis, Vercel.",
  },
  {
    id: "ecommerce",
    keywords: ["ecommerce", "e-commerce", "shop", "store", "platform", "spring"],
    text: "Vinit built a complete e-commerce platform end to end: Spring Boot REST APIs with a React storefront — product catalog with search, cart and checkout flow, order management, JWT authentication, and an admin dashboard backed by MySQL.",
  },
  {
    id: "bugsense",
    keywords: ["bugsense", "bug", "tracker", "triage", "rag"],
    text: "BugSense is Vinit's AI-powered bug tracker: n8n workflow automation auto-triages incoming issues, and a RAG pipeline over vector embeddings semantically matches new issues against past resolved bugs to suggest fixes.",
  },
  {
    id: "hmpv",
    keywords: ["hmpv", "disease", "detection", "ml", "nlp", "machine learning", "accuracy"],
    text: "Vinit's HMPV disease detection system uses NLP-based symptom extraction from clinical reports (NLTK) and trained Random Forest, SVM, and XGBoost classifiers, reaching 97.35% test accuracy. End-to-end pipeline with Pandas, scikit-learn, Flask and MySQL.",
  },
  {
    id: "voxa",
    keywords: ["voxa", "receptionist", "voice", "ava", "vapi", "calls"],
    text: "Voxa is Vinit's AI voice receptionist platform: an Express backend (17 REST routes), Supabase PostgreSQL with row-level security, and Ava — a Vapi voice agent that answers calls, retrieves answers from a knowledge base, and books appointments. Includes an analytics dashboard and n8n workflows.",
  },
  {
    id: "experience",
    keywords: ["experience", "work", "freelance", "job", "client", "applications delivered", "agency", "dream technology", "intern"],
    text: "Vinit has worked as a freelance full-stack developer since 2023, delivering 20+ applications end to end — including government projects. He also served as a Backend Developer on contract for an agency client (Nov 2025 — Mar 2026) and as a Full Stack Developer Intern at Dream Technology (Jan–Apr 2023, remote).",
  },
  {
    id: "education",
    keywords: ["education", "college", "degree", "study", "university"],
    text: "Vinit is pursuing a B.E. in Computer Engineering at ISBM College of Engineering, Pune (2024–2027). He completed a Diploma in Computer Engineering (2021–2024) with 84%.",
  },
  {
    id: "achievements",
    keywords: ["achievement", "award", "certificate", "harvard", "avishkar", "rank", "hackathon", "exhibition"],
    text: "Vinit's achievements: leadership certificate from the Harvard Aspire Leaders Program (Aspire Institute); 1st rank four times in project exhibitions; Winner of Avishkar 2025; active hackathon participant.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "linkedin", "telegram", "instagram", "reach", "hire"],
    text: "You can reach Vinit at potdarvinit077@gmail.com or +91 8262920550. LinkedIn: linkedin.com/in/vinit-potdar-1314a9332. Telegram: hello_vinitt. Instagram: _yrrr_vinit.",
  },
  {
    id: "availability",
    keywords: ["available", "remote", "hire", "job", "open", "work", "location"],
    text: "Vinit is based in Pune, India and is open to remote roles worldwide — including the US, UK, Singapore, UAE, Germany, Japan and Hong Kong.",
  },
];
