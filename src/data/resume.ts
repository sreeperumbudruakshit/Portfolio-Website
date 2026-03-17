export type Link = { label: string; href: string }

export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export type TimelineItem = {
  title: string
  org?: string
  period: string
  points: string[]
}

export type Certification = {
  title: string
  issuer?: string
  year?: string
  proof?: string
}

export type SkillGroup = {
  label: string
  skills: string[]
}

export type ResumeData = {
  basics: {
    name: string
    title: string
    location?: string
    shortIntro: string
    email: string
    resumeDownload: Link
  }
  links: {
    github: string
    linkedin: string
    leetcode: string
    codechef: string
    hackerrank: string
    gfg: string
    instagram?: string
  }
  about: {
    narrative: string
    bio: string[]
    education: TimelineItem[]
  }
  skills: SkillGroup[]
  projects: Project[]
  experienceTimeline: TimelineItem[]
  certifications: Certification[]
  achievements: string[]
  codingProfiles: Link[]
}

export const resume: ResumeData = {
  basics: {
    name: 'Akshit Sreeperumbuduru',
    title: 'Data Science • Data Engineering • AI/ML Enthusiast • B.Tech CSE',
    location: 'India',
    shortIntro:
      'I build AI projects with a product mindset—clear goals, strong results, and clean delivery. Currently focusing on Data Science, Data Engineering, and applied AI/ML projects.',
    email: 'sreeperumbuduru.akshit@gmail.com',
    resumeDownload: {
      label: 'Download Resume',
      href: '/resume.pdf',
    } satisfies Link,
  },

  links: {
    github: 'https://github.com/sreeperumbudruakshit',
    linkedin: 'https://www.linkedin.com/in/akshit-sreeperumbuduru-755169293/',
    leetcode: 'https://leetcode.com/u/sreeperumbuduru_akshit/',
    codechef: 'https://www.codechef.com/users/akshit2006',
    hackerrank: 'https://www.hackerrank.com/profile/sreeperumbuduru1',
    gfg: 'https://www.geeksforgeeks.org/profile/sreeperumburu',
    instagram: '',
  },

  about: {
    narrative:
      "I’m a Computer Science student who enjoys turning ideas into fast, accessible interfaces. I’m especially interested in Data Science and Data Engineering—building reliable pipelines, working with real datasets, and shipping AI/ML experiments as practical, usable products with polished UX.",
    bio: [
      'Strong interest in building responsive, animation-rich UIs.',
      'Hands-on with DSA practice and coding platforms.',
      'Curious about data workflows: cleaning, pipelines, analytics, and ML.',
    ],
    education: [
      {
        title: 'B.Tech — Computer Science & Engineering',
        org: 'B V Raju Institute of Technology, JNTU Hyderabad • Hyderabad, India',
        period: '2023 — 2027',
        points: [
          'Cumulative GPA: 8.22 / 10.0 (pursuing).',
        ],
      },
      {
        title: 'Intermediate',
        org: 'Excellencia Junior College, Telangana State Board of Intermediate Education • Hyderabad, India',
        period: '2021 — 2023',
        points: ['Score: 93.1%.'],
      },
      {
        title: 'School',
        org: 'Bharatiya Vidya Bhavan - Sainikpuri',
        period: '2011 — 2021',
        points: [],
      },
    ] satisfies TimelineItem[],
  },

  skills: [
    { label: 'Languages', skills: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
    { label: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS'] },
    { label: 'Data Science', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'] },
    { label: 'Data Engineering', skills: ['SQL', 'ETL basics', 'Data cleaning', 'Pipelines', 'APIs for data'] },
    { label: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Postman'] },
    { label: 'Technologies', skills: ['ML workflows', 'Model evaluation', 'Dataset handling', 'Responsive UI', 'UI/UX'] },
  ] satisfies SkillGroup[],

  projects: [
    {
      title: 'Smart Wearable System for Early Internal Bleeding Detection',
      description:
        'Developed a Flutter-based mobile app, VitalGuardians, to monitor key vital signs and provide non-invasive, real-time alerts. Calculated a bleeding risk score and classified risk levels using rule-based algorithms.',
      tech: ['Flutter', 'Dart', 'Wearable sensor data integration', 'Algorithm design'],
      github: 'https://github.com/sreeperumbudruakshit',
    },
    {
      title: 'Detecting Deepfake Images using Deep Learning and Generative Adversarial Networks',
      description:
        'Developed a hybrid framework to classify images as real or deepfake by combining feature-based classification with generative modeling. Published in IEEE at the 5th International Conference on Soft Computing for Security Applications.',
      tech: [
        'Python',
        'TensorFlow/Keras',
        'Scikit-learn',
        'Computer Vision',
        'XceptionNet',
        'SVM',
        'Autoencoder GAN',
      ],
      github: 'https://github.com/sreeperumbudruakshit',
    },
    {
      title: 'Hospital AI Chatbot for Patient Data Analysis',
      description:
        'Developed a web-based AI chatbot that analyzes patient datasets and answers healthcare-related queries. Implemented data validation and added visualizations for vitals.',
      tech: ['Python', 'Flask', 'Pandas', 'Matplotlib', 'HuggingFace API', 'NLP'],
      github: 'https://github.com/sreeperumbudruakshit',
    },
  ] satisfies Project[],

  experienceTimeline: [
    {
      title: 'Student Developer',
      org: 'Open to Internships',
      period: '2025 — Present',
      points: [
        'Building AI and data-driven projects with a product mindset.',
        'Improving problem-solving through consistent DSA practice.',
      ],
    },
  ] satisfies TimelineItem[],

  certifications: [
    {
      title: 'AI/ML in Geospatial Data Analysis',
      issuer: 'Indian Institute of Remote Sensing',
      year: '2025',
      proof: '',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera (offered by Stanford University)',
      year: '2025',
      proof: '',
    },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Infosys Springboard',
      year: '2025',
      proof: '',
    },
  ] satisfies Certification[],

  achievements: [
    'Published in IEEE at the 5th International Conference on Soft Computing for Security Applications.',
    'Participated in PROMETHEAN 2025 Hackathon and HACKFINITI 2025 National-Level Hackathon.',
  ],

  codingProfiles: [
    { label: 'GitHub', href: 'https://github.com/sreeperumbudruakshit' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/sreeperumbuduru_akshit/' },
    { label: 'CodeChef', href: 'https://www.codechef.com/users/akshit2006' },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/sreeperumbuduru1' },
    { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/profile/sreeperumburu' },
  ],
}

