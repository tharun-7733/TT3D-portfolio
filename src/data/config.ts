const config = {
  title: "V M Tharun Teja | Machine Learning Engineer",
  description: {
    long: "Explore the portfolio of Tharun Teja, a Machine Learning Engineer specializing in NLP, predictive analytics, and scalable web solutions. Discover my work in predicting equipment failure, text summarization, and sentiment analysis.",
    short:
      "Discover the portfolio of Tharun Teja, a Machine Learning Engineer providing AI-powered solutions.",
  },
  keywords: [
    "Tharun Teja",
    "portfolio",
    "Machine Learning Engineer",
    "AI",
    "NLP",
    "Python",
    "Scikit-Learn",
    "Data Science",
    "Deep Learning",
    "Streamlit",
    "Gradio",
    "React",
    "Next.js",
  ],
  author: "Tharun Teja",
  email: "official.tharunteja@gmail.com",
  site: "https://tharunportfolio.me",

  // for github stars button
  githubUsername: "tharun-7733",
  githubRepo: "T3D-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/tharun-teja-o7/",
    instagram: "",
    facebook: "",
    github: "https://github.com/tharun-7733",
  },
};
export { config };
