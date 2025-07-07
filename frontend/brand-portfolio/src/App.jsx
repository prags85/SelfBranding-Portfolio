import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#11111b] text-white min-h-screen">
     <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience/>
      <Skills />
      <Contact />
      <Footer />
  </div>
  );
}