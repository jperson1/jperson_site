// src/components/Coursework,js

import { PencilIcon } from "@heroicons/react/solid"
import React from "react"
import { courses } from "./data"

export default function Coursework() {
    return (
        <section id="coursework">
            <div class="container px-5 py-5 mx-auto">
                <div class="text-center mb-10">
                    <PencilIcon class="text-purple-400 w-10 inline-block mb-2" />
                    <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
                        Coursework
                    </h1>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                        {courses.map((course) => (
                            <div key={course.title} class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-800 rounded p-4 h-full place-content-center">
                                    <p class="font-medium text-purple-400">
                                        {course.title}
                                    </p>
                                    <p class="font-medium text-white">
                                        {course.subtitle}
                                    </p>
                                    <p class="font-light text-gray-400">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
