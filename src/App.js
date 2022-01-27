import React from "react";
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Education from "./components/Education.js"
import Skills from "./components/Skills.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
