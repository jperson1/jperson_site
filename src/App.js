// src/App.js

import React from "react";
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Education from "./components/Education.js"
import Skills from "./components/Skills.js"
import Projects from "./components/Projects.js"
import Jobs from "./components/Jobs.js"
import Extracurriculars from "./components/Extracurriculars.js"
import Coursework from "./components/Coursework.js"
import Contact from "./components/Contact.js"

export default function App() {
    return (
        <main class="text-gray-300 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Jobs />
            <Extracurriculars />
            <Coursework />
            <Contact />
        </main>
    );
}
