// src/App.js

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Education from "./components/Education.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Jobs from "./components/Jobs.js";
import Extracurriculars from "./components/Extracurriculars.js";
import Coursework from "./components/Coursework.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";


// App | exported to index.html
// Navbar first, then content, then footer
export default function App() {
    return (
        <main class="text-gray-300 bg-gray-900 body-font">
            <Navbar />

            <BrowserRouter>
                <Suspense fallback={ <div>Loading | Please Wait</div> }>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/test' element={ <Home /> } />
                    </Routes>
                </Suspense>
            </BrowserRouter>

            <Footer />
        </main>

    );


}

function Home() {
    return (
        <main>
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

