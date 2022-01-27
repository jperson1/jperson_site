// src/components/Education.js

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";

export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AcademicCapIcon className="text-purple-400 w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                    </p>
                </div>
            </div>
        </section>
    );
}