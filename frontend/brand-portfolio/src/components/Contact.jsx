// components/Contact.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
      <div className="space-y-6">
        {/* Email Box */}
        <div className="bg-[#1f2937] p-6 rounded-2xl flex items-center gap-4 shadow-md">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full">
            <FaEnvelope className="text-white text-xl" />
          </div>
          <div>
            <p className="font-semibold text-white">Email</p>
            <p className="text-gray-300">pragya.maheshwari079@nmims.in</p>
          </div>
        </div>

        {/* Phone Box */}
        <div className="bg-[#1f2937] p-6 rounded-2xl flex items-center gap-4 shadow-md">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <div>
            <p className="font-semibold text-white">Phone</p>
            <p className="text-gray-300">+91 6350633385</p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/pragya-maheshwari73/"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Prags85"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
