// components/Skills.jsx
import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "<>",
      items: ["Python", "C++", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks & Tools",
      icon: "⚙️",
      items: ["React", "Node.js", "TensorFlow", "Django", "MATLAB", "HTML", "CSS", "Power BI", "Streamlit", "Machine Learning", "Deep Learning"]
    },
    {
      title: "Core Subjects",
      icon: "📘",
      items: ["Operating Systems", "DBMS", "Data Structures and Algorithms", "OOPs", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
