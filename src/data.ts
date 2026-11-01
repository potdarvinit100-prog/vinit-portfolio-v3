export const profile = {
  name: "Vinit Niranjan Potdar",
  shortName: "Vinit Potdar",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
  github: "https://github.com/potdarvinit100-prog",
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
    name: "LegacyShift AI",
    line: "Building LegacyShift AI — legacy code, modernised safely.",
  },
};

export const stats = [
  { value: "20+", label: "Applications delivered" },
  { value: "4", label: "Industry projects" },
  { value: "3+", label: "Years shipping" },
  { value: "97.35%", label: "Best model accuracy" },
];

export const aboutParagraphs = [
  "I'm Vinit Potdar, a final-year Computer Engineering student from Pune, India, and a full-stack developer working across Java/Spring Boot, React, TypeScript and Python — and deep into AI, from RAG pipelines and vector embeddings to ML/NLP and voice agents.",
  "My journey started with building: since 2023 I've shipped 20+ applications end to end — scoping, building, deploying and iterating directly with clients — alongside a full-stack internship at Dream Technology and contract backend work for an agency client. I don't do tutorials; I ship production-style systems with real users and real data.",
  "What interests me most is AI that solves a real problem: triaging bugs before they pile up, reading disease signals out of clinical text, answering a business's calls when no human can. I build the whole loop — backend APIs, data, retrieval, and the interface — so the system works in production, not just in a demo.",
  "Right now I'm building LegacyShift AI — legacy code, modernised safely — while staying open to remote engineering roles worldwide, where I can keep shipping full-stack platforms and AI systems end to end.",
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  features?: string[];
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "E-commerce Platform",
    tagline: "Full-stack online store",
    description:
      "Objective: a complete, working online store a real business can run on. The problem: selling online needs more than a catalogue — it needs search, a reliable cart and checkout, order handling, secure accounts and an admin view, all working together. Vinit built it end to end: Spring Boot REST APIs powering a React storefront, with MySQL persistence, and handed it over as a working product. His contribution: sole end-to-end builder, from API design to storefront to deployment and handover.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST API"],
    metrics: ["Full product flow", "Secure auth", "Admin dashboard"],
    features: [
      "Product catalogue with search",
      "Cart and checkout flow",
      "Order management",
      "JWT-based authentication",
      "Admin dashboard",
    ],
  },
  {
    name: "BugSense",
    tagline: "AI-powered bug tracker",
    description:
      "Objective: stop bug reports piling up untriaged, and stop teams re-solving the same bug. The problem: incoming issues need sorting fast, and past fixes are often lost in old tickets. Vinit built an AI-powered bug tracker: n8n workflow automation auto-triages incoming issues the moment they are filed, and a RAG pipeline over vector embeddings semantically matches new issues against past resolved bugs to suggest fixes. His contribution: designed and built the triage automation and the retrieval pipeline over real data.",
    tech: ["n8n", "RAG", "Vector Embeddings", "Python", "LangChain"],
    metrics: ["Auto-triage", "Semantic matching"],
    features: [
      "Auto-triage the moment an issue is filed",
      "Semantic matching against resolved bugs",
      "Fix suggestions drawn from past tickets",
      "Retrieval architecture over real data",
    ],
  },
  {
    name: "HMPV Disease Detection",
    tagline: "ML / NLP disease detection",
    description:
      "Objective: support faster, data-driven disease detection from clinical text. The problem: clinical reports hold symptom information in unstructured language that is hard to analyse at scale. Vinit built an ML/NLP system: NLP-based symptom extraction from clinical reports with NLTK, trained Random Forest, SVM, and XGBoost classifiers, and an end-to-end pipeline — data cleaning with Pandas, model training and evaluation with scikit-learn, served through a Flask + MySQL backend. His contribution: built the full pipeline from text extraction to trained, evaluated models and backend serving.",
    tech: ["Python", "scikit-learn", "NLTK", "Flask", "MySQL"],
    metrics: ["97.35% test accuracy"],
    features: [
      "NLP symptom extraction with NLTK",
      "Random Forest, SVM and XGBoost classifiers",
      "End-to-end ML pipeline with scikit-learn",
      "Flask + MySQL backend serving",
    ],
  },
  {
    name: "Voxa AI Receptionist",
    tagline: "AI voice receptionist platform",
    description:
      "Objective: let a business answer every call, even when no human receptionist is available. The problem: missed calls mean missed appointments, and a receptionist needs live knowledge and live availability at call time. Vinit built a production-style AI voice receptionist platform: an Express backend with 17 REST routes, Supabase PostgreSQL with row-level security, and Ava — a Vapi voice agent that answers calls, retrieves answers from a knowledge base, checks live availability and books appointments — plus an analytics dashboard and n8n workflows for confirmations and alerts. His contribution: built the platform end to end, from backend routes and data security to the voice agent and dashboard.",
    tech: ["Express", "Supabase", "Vapi", "React", "n8n"],
    metrics: ["17 REST routes", "Voice AI"],
    features: [
      "Ava voice agent answering live calls",
      "Knowledge-base answers during calls",
      "Live availability checks and booking",
      "Analytics dashboard",
      "n8n workflows for confirmations and alerts",
    ],
  },
  {
    name: "Vinit's Friend — Portfolio Assistant",
    tagline: "On-site assistant for this portfolio",
    description:
      "Objective: let visitors get answers about Vinit's work without reading every section. The problem: a portfolio's details are spread across many sections, and visitors often have one specific question. Vinit built the assistant that runs on this site: it answers questions about his projects, skills, experience, education, achievements and contact details from a curated knowledge base, using keyword-overlap retrieval to pick the most relevant answers and composing them into replies with a streaming display. His contribution: designed and built the assistant end to end, including the knowledge base, retrieval scoring, and chat interface. Note: retrieval is keyword-based over a curated knowledge base, not embedding-based RAG.",
    tech: ["React", "TypeScript", "Keyword Retrieval", "Curated Knowledge Base"],
    metrics: ["Live on this site", "Streaming replies"],
    features: [
      "Answers from a curated knowledge base",
      "Keyword-overlap retrieval scoring",
      "Top answers composed into replies",
      "Streaming reply display",
      "Suggestion prompts and CV shortcut",
    ],
    repo: "https://github.com/potdarvinit100-prog/vinit-portfolio-v3",
  },
];

/* Latest pushed builds — real-time apps, live data, honest error states.
   Source on GitHub; no live demo is claimed for these (repo links only). */
export const latestBuilds: Project[] = [
  {
    name: "Breathe India",
    tagline: "Live air quality across India",
    description:
      "Live PM2.5, PM10 and US AQI plus weather for 8 Indian cities from Open-Meteo, refreshing every 5 minutes. Shows its data source and last-updated time, with an honest error state when the feed fails.",
    tech: ["JavaScript", "Open-Meteo API", "AQI"],
    metrics: ["Live data", "8 cities"],
    repo: "https://github.com/potdarvinit100-prog/breathe-india",
  },
  {
    name: "Quake Watch",
    tagline: "Global earthquakes, last 24 hours",
    description:
      "Global earthquake feed from USGS, with minimum-magnitude filters and a 5-minute refresh. Shows its data source and last-updated time, with an honest error state when the feed fails.",
    tech: ["JavaScript", "USGS API"],
    metrics: ["Live data", "24h feed"],
    repo: "https://github.com/potdarvinit100-prog/quake-watch",
  },
  {
    name: "Coin Pulse",
    tagline: "Crypto prices in USD + INR",
    description:
      "BTC, ETH, SOL, DOGE and XRP in USD and INR with 24h change, plus per-coin target-price alerts kept in the browser, from CoinGecko with a 60-second refresh.",
    tech: ["JavaScript", "CoinGecko API"],
    metrics: ["Live data", "Price alerts"],
    repo: "https://github.com/potdarvinit100-prog/coin-pulse",
  },
  {
    name: "FX Alert",
    tagline: "Currency converter + rate alerts",
    description:
      "Converter and rate alerts for USD, EUR, GBP and INR from the Frankfurter API, refreshing every 10 minutes. AED is deliberately not offered — the ECB-based rate list has no dirham.",
    tech: ["JavaScript", "Frankfurter API"],
    metrics: ["Live data", "Rate alerts"],
    repo: "https://github.com/potdarvinit100-prog/fx-alert",
  },
  {
    name: "Trending Now",
    tagline: "Trending GitHub repos, last 7 days",
    description:
      "Repositories created in the last 7 days ranked by stars, with a language filter, from the GitHub Search API with a 10-minute refresh. Notes the unauthenticated 60 requests/hour limit honestly.",
    tech: ["JavaScript", "GitHub API"],
    metrics: ["Live data", "7-day window"],
    repo: "https://github.com/potdarvinit100-prog/trending-now",
  },
  {
    name: "Remote Board",
    tagline: "Remote jobs, live or snapshot",
    description:
      "Remote job listings that try the live RemoteOK feed first and fall back to a dated snapshot of real listings, always labelled LIVE or SNAPSHOT with its date — never presented as live when it is not.",
    tech: ["JavaScript", "RemoteOK API"],
    metrics: ["Live first", "Labelled fallback"],
    repo: "https://github.com/potdarvinit100-prog/remote-board",
  },
];

export const experience = [
  {
    title: "Co-founder",
    org: "LegacyShift AI",
    period: "Sept 2026 — Present",
    points: [
      "Building LegacyShift AI, a product for modernizing legacy code safely, with Sahil Sah.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    org: "Dream Technology",
    period: "Jan 2023 — Apr 2023",
    points: [
      "Full-stack internship with a global remote team; built and shipped web features across frontend and backend.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Engineering",
    school: "ISBM College of Engineering, Pune",
    period: "2024 — 2027",
    detail: "Final-year B.E. student. Current SGPA 9.57 (SGPA, not CGPA).",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic, Solapur",
    period: "2021 — 2024",
    detail: "84%.",
  },
  {
    degree: "SSC",
    school: "Jawahar Vidyalaya",
    period: "",
    detail: "95.20%.",
  },
];

export interface Achievement {
  title: string;
  detail: string;
  spotlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: "Prakaram Idea Pitching Competition — RUNNER-UP",
    detail:
      "Runner-up at the Prakaram Idea Pitching Competition, recognised for a compelling idea pitch delivered with clarity, structure and conviction.",
    spotlight: true,
  },
  {
    title: "Selected for Harvard Aspire Leaders Program",
    detail: "Selected for the Aspire Leaders Program (Aspire Institute) — leadership certificate.",
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
    title: "Datathon 3rd Rank — Kaggle",
    detail: "3rd place in the Kaggle battery-health Datathon with team Super intelligence.",
  },
  {
    title: "3× Hackathon Winner",
    detail: "Winner across three hackathons and build competitions.",
  },
  {
    title: "Forage — AWS Simulation",
    detail: "Completed the Forage AWS simulation.",
  },
];

export const skills: Record<string, string[]> = {
  "Programming Languages": ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  "Frontend Development": ["React.js", "Next.js", "Tailwind CSS", "WebSockets"],
  "Backend Development": ["Node.js", "Spring Boot", "Express", "FastAPI", "Flask", "REST APIs", "Microservices", "GraphQL"],
  Databases: ["MySQL", "Oracle", "MongoDB", "Supabase", "Redis"],
  "AI and Generative AI": ["scikit-learn", "NLTK", "OpenCV", "OpenAI APIs", "Vapi voice AI"],
  "RAG and LLM Technologies": ["RAG", "Vector Embeddings", "LangChain", "LLM patterns"],
  "Developer Tools and Platforms": ["Git", "Docker", "CI/CD", "n8n"],
  "Cloud and Deployment": ["AWS", "Vercel"],
};

export const tpc = {
  org: "ISBM College of Engineering, Pune",
  points: [
    "Engaged with the college Training & Placement Cell around placements and job applications.",
    "Prepared for placement processes and tracked job applications through the cell's placement engagement.",
    "Pursued remote and India-based engineering opportunities through placement-cell channels.",
  ],
};

/* ---------- Vinit's Friend knowledge base ---------- */
export interface KBChunk {
  id: string;
  keywords: string[];
  text: string;
}

export const knowledgeBase: KBChunk[] = [
  {
    id: "legacyshift",
    keywords: ["legacyshift", "startup", "currently building", "building now"],
    text: "Vinit is building LegacyShift AI, a product that modernises legacy code safely. He is building it as a final-year Computer Engineering student from Pune, India.",
  },
  {
    id: "bio",
    keywords: ["who", "about", "vinit", "introduce", "background", "summary"],
    text: "Vinit Niranjan Potdar is a Software Engineer, Full-Stack Developer and AI Engineer from Pune, India. He is a final-year Computer Engineering student who builds full-stack platforms and AI systems end to end, and he is open to remote work worldwide.",
  },
  {
    id: "skills",
    keywords: ["skill", "stack", "tech", "technology", "language", "framework", "tools"],
    text: "Vinit's stack: Java, Python, TypeScript, JavaScript, SQL; Spring Boot, REST APIs, microservices, GraphQL, Node.js, Express, FastAPI, Flask, n8n automation; React.js, Next.js, Tailwind CSS, WebSockets; RAG, vector embeddings, LangChain, OpenAI APIs, LLM patterns, scikit-learn, NLTK, OpenCV, Vapi voice AI; MySQL, Oracle, MongoDB, Supabase, Redis, Git, Docker, AWS, CI/CD, Vercel.",
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
    keywords: ["experience", "work", "job", "client", "applications delivered", "agency", "dream technology", "intern"],
    text: "Vinit served as a Backend Developer on contract for an agency client (Nov 2025 — Mar 2026) and as a Full Stack Developer Intern at Dream Technology (Jan–Apr 2023, remote).",
  },
  {
    id: "education",
    keywords: ["education", "college", "degree", "study", "university"],
    text: "Vinit is pursuing a B.E. in Computer Engineering at ISBM College of Engineering, Pune (2024–2027), current SGPA 9.57 (SGPA, not CGPA). He completed a Diploma in Computer Engineering at Government Polytechnic, Solapur (2021–2024) with 84%, and his SSC at Jawahar Vidyalaya with 95.20%.",
  },
  {
    id: "achievements",
    keywords: ["achievement", "award", "certificate", "harvard", "avishkar", "rank", "hackathon", "exhibition", "prakaram"],
    text: "Vinit's achievements: Runner-up at the Prakaram Idea Pitching Competition; leadership certificate from the Harvard Aspire Leaders Program (Aspire Institute); 1st rank four times in project exhibitions; Winner of Avishkar 2025; 3rd place in the Kaggle battery-health Datathon with team Super intelligence; winner across three hackathons; completed the Forage AWS simulation.",
  },
  {
    id: "tpc",
    keywords: ["tpc", "placement", "training", "placement cell"],
    text: "Vinit has engaged with his college Training & Placement Cell (ISBM College of Engineering, Pune) around placements and job applications. No member or coordinator title is claimed for this engagement.",
  },
  {
    id: "assistant",
    keywords: ["assistant", "friend", "chatbot", "chat", "ask"],
    text: "Vinit's Friend is the assistant on this portfolio: it answers questions about Vinit's projects, skills, experience, education, achievements and contact details from a curated knowledge base, using keyword retrieval to pick the most relevant answers. It runs on this site and its code is in the vinit-portfolio-v3 repository.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "linkedin", "telegram", "instagram", "reach", "hire"],
    text: "You can reach Vinit at potdarvinit077@gmail.com or +91 8262920550. LinkedIn: linkedin.com/in/vinit-potdar-1314a9332. Telegram: hello_vinitt. Instagram: _yrrr_vinit. GitHub: github.com/potdarvinit100-prog.",
  },
  {
    id: "availability",
    keywords: ["available", "remote", "hire", "job", "open", "work", "location"],
    text: "Vinit is based in Pune, India and is open to remote roles worldwide — including the US, UK, Singapore, UAE, Germany, Japan and Hong Kong.",
  },
];
