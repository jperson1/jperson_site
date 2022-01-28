// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data.js";

export default function Projects() {
    return (
        <section id="projects" class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-10 mx-auto text-center lg:px-40">
                <div class="flex flex-col w-full mb-8">
                    <CodeIcon class="text-purple-400 mx-auto inline-block w-10 mb-4" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
                        A selection of projects I've worked on.
                    </p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            class="sm:w-1/2 w-100 p-4">
                            <div class="flex relative">
                                <img
                                    alt="gallery"
                                    class="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p class="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div class="flex flex-col w-full mb-8">
                    <p class="lg:w-2/3 mx-auto leading-normal text-base text-gray-400">
                        Please note, some of the above projects cannot be shared directly, as they are a component or a product of private UMBC course content. I am, however, happy to talk about these projects by email or phone.
                    </p>
                    <a href="#contact" class="lg:w-2/3 mx-auto leading-relaxed text-purple-500 hover:text-purple-400">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}