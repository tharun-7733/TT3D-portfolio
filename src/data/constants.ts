// Portfolio Constants for Tharun Teja
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PYTHON = "python",
  CPP = "cpp",
  C = "c",
  KOTLIN = "kotlin",
  XML = "xml",
  SCIKIT = "scikit",
  FLASK = "flask",
  GRADIO = "gradio",
  STREAMLIT = "streamlit",
  NUMPY = "numpy",
  PANDAS = "pandas",
  JETPACK = "jetpack"
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The backbone of my ML models, simple yet powerful! 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "Where pointers point to the stars, fast and strict! 🚀",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.C]: {
    id: 3,
    name: "c",
    label: "C",
    shortDescription: "The grandfather of them all. Pure memory manipulation! 💀",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 4,
    name: "mysql",
    label: "MySQL",
    shortDescription: "SELECT * FROM the_database, classic! 🐬",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.KOTLIN]: {
    id: 5,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Making Android development fun again! 📱",
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  [SkillNames.XML]: {
    id: 6,
    name: "xml",
    label: "XML",
    shortDescription: "A lot of tags but it gets the layout done! 📜",
    color: "#f5821f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
  },
  [SkillNames.SCIKIT]: {
    id: 7,
    name: "scikit",
    label: "Scikit-Learn",
    shortDescription: "Machine learning for the masses, respect! 🤖",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 8,
    name: "flask",
    label: "Flask",
    shortDescription: "Micro web framework, macro possibilities! 🌶️",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.GRADIO]: {
    id: 9,
    name: "gradio",
    label: "Gradio",
    shortDescription: "Building ML interfaces at warp speed! 🚀",
    color: "#ff7f0e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Fallback
  },
  [SkillNames.STREAMLIT]: {
    id: 10,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "Data apps from pure python code, magic! ✨",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", // Ensure correct link or fallback
  },
  [SkillNames.NUMPY]: {
    id: 11,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Numbers, matrices, arrays – I crunch them all! 🧮",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 12,
    name: "pandas",
    label: "Pandas",
    shortDescription: "DataFrames all day, making data manageable! 🐼",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.JETPACK]: {
    id: 13,
    name: "jetpack",
    label: "Jetpack Compose",
    shortDescription: "Modern UI toolkit for Android, composable bliss! 💥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  [SkillNames.JS]: {
    id: 14,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95! 💯",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 15,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript's overachieving cousin! 🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 16,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad! 🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 17,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip 💁‍♂️",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 18,
    name: "react",
    label: "React",
    shortDescription: "Building dynamic UIs like a boss! 🧩",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 19,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "the drama queen of front-end frameworks! 👑",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 20,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different! 🌪️",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 21,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JS on the server, period! 🔙",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 22,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard! 🚂",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 23,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion 💅",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 24,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip! 💪",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 25,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard! 🕵️‍♂️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 26,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Aug 2025",
    endDate: "Aug 2025",
    title: "AI-Powered NLP Training",
    company: "Algo Tutor Academy",
    description: [
      "Gained strong proficiency in NLP preprocessing including tokenization, stemming, lemmatization, stop-word removal, and text normalization.",
      "Implemented and compared ML classifiers (Naive Bayes, SVM, Logistic Regression) with deep-learning architectures such as RNNs, LSTMs, and Transformers.",
      "Fine-tuned state-of-the-art models like BERT and GPT-based models for sentiment analysis and text summarization.",
      "Built end-to-end NLP applications achieving up to 89% accuracy through structured hyperparameter tuning.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SCIKIT,
      SkillNames.NUMPY,
      SkillNames.PANDAS,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2023",
    endDate: "Present",
    title: "Bachelor of Technology - Computer Science and Engineering",
    company: "Lovely Professional University",
    description: [
      "CGPA: 7.50",
      "Specializing in Software Engineering and Machine Learning concepts.",
      "Participating in coding competitions (CodeChef rating 1400+) and solving diverse algorithms.",
    ],
    skills: [
      SkillNames.CPP,
      SkillNames.C,
      SkillNames.PYTHON,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Apr 2021",
    endDate: "Mar 2023",
    title: "Higher Secondary Education",
    company: "Narayana Junior College",
    description: [
      "Completed my higher secondary education with a percentage of 73.7%.",
      "Focused on foundational science and mathematics to prepare for engineering.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens! Proceed with sunglasses.",
    "Caution: Brightness overload, hope your screen dimming works.",
    "Switching to light mode... Are you sure your eyes are ready?",
  ],
  dark: [
    "Dark mode activated! Thank me from the bottom of your eyes.",
    "Welcome to the shadows, true hacker style.",
    "Ah, darkness. Just the way my IDE intended it.",
  ],
};
