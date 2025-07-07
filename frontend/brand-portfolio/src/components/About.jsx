import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
        <p className="text-lg leading-7">
          I am a forth-year Computer Science student at NMIMS University with a strong foundation in AI, machine learning, and full-stack development.
          I am passionate about building impactful and accessible technologies that solve real-world problems.
        </p>
        <ul className="list-disc list-inside mt-6 space-y-2 text-lg">
          <li>Experienced in developing AI-based applications using Google Gemini, TensorFlow, and Streamlit.</li>
          <li>Skilled in building full-stack systems with React, Node.js, Express, and MongoDB.</li>
          <li>Strong understanding of data structures, algorithms, and backend services.</li>
          <li>Maintained a CGPA of 9.5/10 throughout my academic journey.</li>
          <li>Actively contributed to university research symposiums and student committees.</li>
        </ul>
      </div>
    </section>
  );
}
