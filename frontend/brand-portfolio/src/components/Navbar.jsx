// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white fixed w-full top-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pragya Maheshwari</h1>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">About</a>
          <a href="#education" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Education</a>
          <a href="#projects" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Projects</a>
          <a href="#skills" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Skills</a>
          <a href="#contact" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}