
import { Experience, Education, Skill, Project } from './types';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Asish Sharma",
  role: "Data Science Undergraduate | Python | Machine Learning | BI & Visualization",
  email: "asish.off@gmail.com",
  phone: "8535924784",
  linkedin: "https://www.linkedin.com/in/asishsharma27",
  github: "https://github.com/Asish2701",
  location: "Kolkata, West Bengal, India",
  about: "Second-year B.Tech student in CSE (Data Science) at Techno Main Salt Lake with hands-on experience building machine learning models, BI dashboards, and data-driven web applications. Strong in Python, analytics, and turning raw data into clear decisions, currently seeking data science internship opportunities.",
  profilePic: "/asish-profile.png"
};

export const PROJECTS: Project[] = [
  {
    title: "Market Basket Analyzer",
    description: "Analyzed 100K+ retail transactions using Apriori and FP-Growth, surfaced the top 50 high-confidence association rules, and exposed cross-sell recommendations through a Flask REST API.",
    link: "https://market-basket-analysis-dashboard.vercel.app/",
    tags: ["Python", "Apriori", "FP-Growth", "Flask API"]
  },
  {
    title: "BI Dashboard and Advanced EDA",
    description: "Built a multi-page Power BI dashboard with 6 KPI categories, drill-through analysis, regression overlays, and anomaly flags across 50,000+ records.",
    link: "#",
    tags: ["Power BI", "Pandas", "Seaborn", "Statistical Modeling"]
  },
  {
    title: "RenderX Visuals Production Pipeline",
    description: "Led end-to-end creative production across 10+ client and campus projects, managing scripting, filming, post-production, and on-time delivery for promotional media.",
    link: "#",
    tags: ["Creative Ops", "Video Production", "Editing", "Leadership"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "RenderX Visuals",
    role: "Founder and Lead Producer",
    period: "January 2026 - Present",
    location: "India",
    description: "Secured the official Creative Media Partner contract for Safalya Fest and delivered promotional content for a 2,000+ student audience while leading end-to-end production across 10+ projects."
  },
  {
    company: "Samarth TMSL",
    role: "Visual Effects Expert",
    period: "August 2023 - Present",
    location: "Kolkata, West Bengal, India",
    description: "Lead motion graphics, VFX, and post-production for 5+ college events and media campaigns per semester, increasing average viewership by 30% across three consecutive semesters."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Techno Main Salt Lake, Kolkata",
    degree: "B.Tech - CSE (Data Science)",
    period: "Aug 2023 - Present | CGPA: 7.5 / 10"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Technical Skills",
    items: ["Python", "SQL", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Flask", "Matplotlib"]
  },
  {
    category: "Certifications",
    items: ["HackerRank Python Advanced - 5-Star Gold Badge", "Python Flask Framework Certificate", "Google Data Analytics - Coursera (In Progress)"]
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: 'GitHub', url: PERSONAL_INFO.github, icon: Github },
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { name: 'Phone', url: `tel:${PERSONAL_INFO.phone}`, icon: Phone },
];
