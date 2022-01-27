// src/components/About.js

import React from "react";

export default function About() {
    return (
        <section id="about">
            <div class="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        James Person
                        <br class="hidden lg:inline-block" />Software Developer
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        Recent graduate looking for opportunities in web development, database management, and AI/ML.
                    </p>
                    <div class="flex justify-center">
                        <a
                            href="#contact"
                            class="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Previous Work
                        </a>
                    </div>
                </div>
                <div class="lg:max-w-full lg:w-full md:w-1/2 w-5/6">
                    <img
                        class="object-cover object-center rounded-3xl border-solid border-4 border-gray-800"
                        alt="umbc"
                        src="./umbc.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}