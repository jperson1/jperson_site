// src/components/Skills.js

import { CheckCircleIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data.js";

export default function Skills() {
    return (
        <section id="skills">
            <div class="container px-5 mx-auto">
                <div class="text-center mb-8">
                    <ChipIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
                        Technical Skills
                    </h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        A non-exaustive list of languages, frameworks, &amp; softwares I've used.
                    </p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckCircleIcon class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}