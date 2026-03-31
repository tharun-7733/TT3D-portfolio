import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Icons 
import { SiPython, SiScikitlearn, SiFlask, SiReact, SiNextdotjs, SiJupyter, SiAnaconda } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  scikit: {
    title: "Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  gradio: {
    title: "Gradio",
    bg: "black",
    fg: "white",
    icon: <SiPython />, // generic python for gradio/streamlit
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  nltk: {
    title: "NLTK",
    bg: "black",
    fg: "white",
    icon: <SiAnaconda />, // placeholder
  },
  huggingface: {
    title: "Hugging Face",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "medical-failure",
    category: "Machine Learning",
    title: "Predicting Medical Equipment Failure",
    src: "/assets/projects-screenshots/medical-failure.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.gradio],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikit,
        PROJECT_SKILLS.jupyter,
      ],
    },
    github: "https://github.com/tharun-7733",
    live: "https://huggingface.co/spaces/tharuntej7373/medical_euqipment_maintenance",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            Proactive Maintenance via AI 🚀
          </TypographyP>
          <TypographyP className="font-mono ">
            Designed a robust ML-powered web solution to monitor operational parameters like device age, usage trends, and environmental conditions. Using Logistic Regression, this tool successfully classifies failure risks ahead of time.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">The Model</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              Leveraged Logistic Regression specifically tuned to flag high-risk devices, enabling proactive maintenance.
            </li>
            <li className="font-mono mb-2">
              Reached ~90% prediction accuracy, demonstrating robustness to variance and noisy sensor data.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "news-summarizer",
    category: "Generative AI",
    title: "News Article Summarizer",
    src: "/assets/projects-screenshots/news-summarizer.png",
    screenshots: [],
    github: "https://github.com/tharun-7733/News-Article-Summarizer",
    live: "https://tharun-7733.github.io/News-Article-Summarizer/",
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.huggingface,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A seamless web-based system answering the problem of information overload. It converts long-form news articles from a URL input into concise, readable summaries utilizing Transformer architectures.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Processed complex raw text data through NLP pipelines encompassing sentence segmentation, normalization, and semantic filtering.
          </p>
          <TypographyH3 className="my-4 mt-8">BART Transformer</TypographyH3>
          <p className="font-mono mb-2">
            Integrated state-of-the-art BART-based Transformer models from Hugging Face. These large language models generate <strong>abstractive</strong> summaries, meaning they preserve context and intent rather than just blindly copying source sentences.
          </p>
        </div>
      );
    },
  },
  {
    id: "sentiment-analysis",
    category: "Natural Language Processing",
    title: "Social Media Sentiment Analysis",
    src: "/assets/projects-screenshots/sentiment-analysis.png",
    screenshots: [],
    github: "https://github.com/tharun-7733/Sentiment_Analysis-of-Social-media",
    live: "https://sentimentanalysis-of-social-app.streamlit.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
      ],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.scikit, PROJECT_SKILLS.nltk, PROJECT_SKILLS.jupyter],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ever wondered what the Internet really thinks? This machine learning-driven application analyzes raw text (like tweets) and classifies sentiment as positive, negative, or neutral in real-time.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">NLP Preprocessing</TypographyH3>
          <p className="font-mono mb-2">
            Features complete linguistic extraction Pipelines including Tokenization, Stop-word elimination, TF-IDF weighting, and vectorization to extract true meaning.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li className="font-mono mb-2">
              Powered by traditional yet highly-optimized Logistic Regression models.
            </li>
            <li className="font-mono mb-2">
              Provides robust differentiation for emotional polarity within messy, shorthand social media data.
            </li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
