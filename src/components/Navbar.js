// src/components/Navbar.js

import { HomeIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header class="bg-gray-800 md:sticky top-0 z-10">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="/" class="ml-3 text-xl">
                        <HomeIcon class="text-purple-400 w-10 inline-block hover:text-purple-500" />
                    </a>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#about" class="mr-5 hover:text-white">
                        About
                    </a>
                    <a href="#education" class="mr-5 hover:text-white">
                        Education
                    </a>
                    <a href="#skills" class="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#projects" class="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#contact" class="mr-5 hover:text-white">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}