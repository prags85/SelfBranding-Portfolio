// components/Projects.jsx
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "HeartGuard: GDSC Solution Challenge 2023",
      description:
        "AI-powered heart disease prediction web app using 9+ ML algorithms including Logistic Regression, Random Forest, AdaBoost, and Deep Neural Network. Features data visualizations, EDA, and model evaluations.",
      link: "https://heartdf-mswvgpvyqc44ff3fe9rta7.streamlit.app/"
    },
    {
      title: "Interview AI – AI-Powered Interview Coach",
      description:
        "AI interview platform using Google Gemini Pro with React, Node.js, Express, and MongoDB.",
      link: "https://bejewelled-bonbon-8370ae.netlify.app"
    },
    {
      title: "Kidney Disease Classification",
      description:
        "TensorFlow model to classify kidney CT scans; Streamlit UI for predictions.",
      link: "https://kidneydiseaseclassification-ytsmperjhk24axfaxlxfu9.streamlit.app/"
    },
    {
      title: "Movie Recommender System",
      description:
        "ML-based content recommender using cosine similarity with Streamlit frontend and TMDB API.",
      link: "https://recommender-movie-system.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
            <p className="text-white mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 hidden group-hover:flex items-center justify-center bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
