// components/Hero.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center pt-20 bg-gradient-to-b from-black to-gray-900">
      <img src="/assets/profile.jpg" alt="Profile" className="rounded-full w-48 h-48 border-4 border-white mb-4" />
      <h1 className="text-4xl font-bold">Pragya Maheshwari</h1>
      <p className="mt-2 text-lg max-w-xl">Motivated and solution-driven Computer Science student passionate about AI, ML, and full-stack development.</p>
      <div className="mt-6">
        <a href="/Final_resume.pdf" download className="bg-white text-black px-6 py-2 rounded-full font-semibold inline-block">Download Resume</a>
      </div>
      <div className="mt-6 flex space-x-4">
        <div className="bg-white px-4 py-3 rounded-xl">
          <a href="mailto:pragya.maheshwari079@nmims.in" className="text-black hover:text-blue-600">
            <FaEnvelope size={28} />
          </a>
        </div>
        <div className="bg-white px-4 py-3 rounded-xl">
          <a href="https://linkedin.com/in/pragya-maheshwari73" className="text-black hover:text-blue-600">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="bg-white px-4 py-3 rounded-xl">
          <a href="https://github.com/Prags85" className="text-black hover:text-blue-600">
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
