import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "AI Automation Intern",
      company: "Labdox Pvt Ltd",
      duration: "July 2025 – Sep 2025",
      location: "Remote Internship",
      details: [
        "Designed and built AI-powered workflows and intelligent automation systems for real-world web-based applications.",
        "Developed and integrated AI models such as chatbots and predictive engines into frontend and backend systems.",
        "Worked with third-party APIs, built dashboards, and created internal tools to streamline automation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold">{exp.role} – {exp.company}</h3>
            <p className="text-sm text-gray-300">{exp.duration} | {exp.location}</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
