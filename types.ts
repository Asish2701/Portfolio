
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
