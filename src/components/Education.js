// src/components/Education.js

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";

export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <AcademicCapIcon className="text-purple-400 w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        University of Maryland, Baltimore county | Winter 2021
                    </p>
                    <p className="text-base italic leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Bachelor of Science, Computer Science, Minor in Mathematics
                    </p>
                    <p className="text-base leading-normal xl:w-2/4 lg:w-3/4 mx-auto">
                        Cummulative GPA: 3.13/4.00
                    </p>
                </div>
            </div>
        </section>
    );
}