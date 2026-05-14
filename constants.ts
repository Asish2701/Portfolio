
import { Experience, Education, Skill, Project } from './types';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Asish Sharma",
  role: "Data Scientist | 3rd Year B.Tech (Data Science) | Python | ML & Predictive Modeling",
  email: "asish.off@gmail.com",
  phone: "+91 8535924784",
  linkedin: "https://www.linkedin.com/in/asishsharma27",
  github: "https://github.com/Asish2701",
  location: "Kharagpur, West Bengal, India",
  about: "Aspiring Data Scientist and 3rd-year CS (Data Science) undergraduate at Techno Main Salt Lake with hands-on experience in predictive modeling, exploratory data analysis, and ML deployment. Passionate about building data-driven solutions to real-world problems including electoral analytics and market intelligence.",
  profilePic: "/asish-profile.png"
};

export const PROJECTS: Project[] = [
  {
    title: "WB 2026 Election Result Predictor",
    description: "Built an end-to-end multiclass classifier predicting winning party across all 294 West Bengal Assembly seats. Engineered features from 3 election datasets using custom PC-to-AC seat mapping. Achieved 70.3% Macro F1 with 4 progressive scenario models (Baseline → Margin Squeeze → Anti-Incumbency → All Factors) for strategic analysis. Deployed public-facing Streamlit app with seat-level flip risk scoring and Power BI-ready exports.",
    link: "#",
    tags: ["Python", "Scikit-learn", "Streamlit", "Power BI", "Predictive Modeling"]
  },
  {
    title: "EquityLens — Stock Forecast Platform",
    description: "Building a real-time stock analysis platform aggregating analyst target prices via IndianAPI across 90D/60D/30D/1W snapshots. Architected full-stack system with React frontend and FastAPI backend deployed on Vercel. Implemented server-side API key management and designed scoring engine for buy/hold/cautious signals based on analyst consensus.",
    link: "#",
    tags: ["Python", "FastAPI", "React", "Scikit-learn", "In Progress"]
  },
  {
    title: "Market Basket Analyzer",
    description: "Built market basket analysis tool to uncover product co-purchase patterns across large retail transaction datasets. Applied Apriori and FP-Growth algorithms to generate frequent itemsets and association rules. Optimized sparse matrix handling, reducing end-to-end execution time by 25% on high-cardinality transaction data.",
    link: "#",
    tags: ["Python", "Scikit-learn", "Association Rule Mining", "Data Analysis"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "RenderX Visuals",
    role: "Founder & Lead Creator",
    period: "December 2024 - Present",
    location: "India",
    description: "Established RenderX Visuals specializing in high-fidelity video production and cinematic editing for digital platforms. Served as Official Creative Media Partner for college educational fests, leading end-to-end promotional strategy and branding."
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
  {, WB",
    degree: "B.Languages",
    items: ["Python (Advanced)", "Java", "C", "SQL (Advanced Queries)"]
  },
  {
    category: "Data Science Stack",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Flask", "Streamlit", "FastAPI"]
  },
  {
    category: "Tools & Platforms",
    items: ["Power BI", "Git", "GitHub", "Jupyter Notebook", "AWS (S3)", "Snowflake"]
  },
  {
    category: "Core Competencies",
    items: ["Predictive Modeling", "Exploratory Data Analysis (EDA)", "Statistical Inference", "Association Rule Mining", "ML Deployment"]
  },
  {
    category: "Certifications & Achievements",
    items: ["HackerRank Python 5-Star Gold Badge", "Python Flask Framework (Scalable Web Applications & RESTful APIs)", "Team Kalakriti - Lead Creative Direction at Safalya Educational Fest
    period: "ndas", "NumPy", "Power BI", "Flask", "Matplotlib"]
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
