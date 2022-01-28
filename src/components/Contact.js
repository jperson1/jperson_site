// src/components/Contact.js

import { GlobeAltIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" class="relative">
            <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <form
                    netlify
                    name="contact"
                    class="lg:w-2/5 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pr-10">
                    <h2 class="text-purple-400 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p class="leading-relaxed mb-5">
                        Also feel free to reach out by email, text, or call.
                    </p>
                    <div class="relative mb-4">
                        <label htmlFor="name" class="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="w-full placeholder:italic placeholder:text-gray-500 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Firstname Lastname"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="email" class="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full placeholder:italic placeholder:text-gray-500 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="example@example.com"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            htmlFor="message"
                            class="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            class="w-full placeholder:italic placeholder:text-gray-500 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="A sample message for James."
                        />
                    </div>
                    <button
                        type="submit"
                        class="text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
                        Submit
                    </button>
                </form>
                <div class="lg:w-3/5 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 pl-16 pb-5 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        class="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.8)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.5354158889463!2d-76.7554224843739!3d39.366756226745196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c819eb1a28fa1b%3A0xd45865e9467068e5!2s8019%20Mollye%20Rd%2C%20Pikesville%2C%20MD%2021208!5e0!3m2!1sen!2sus!4v1643396778436!5m2!1sen!2sus"
                    />
                    <div class="bg-gray-900 absolute top-4 left-4 flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                                <GlobeAltIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                                ADDRESS:
                            </h2>
                            <p class="leading-relaxed">
                                8019 Mollye Road <br />
                                Pikesville, MD 21208
                            </p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs">
                                <MailIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                                EMAIL:
                            </h2>
                            <a href="mailto:jperson1@umbc.edu" class="leading-relaxed hover:underline">
                                jperson1@umbc.edu
                            </a>
                            <h2 class="title-font font-semibold text-purple-400 tracking-widest text-xs mt-4">
                                <PhoneIcon class="text-purple-400 w-4 mr-1 mb-1 inline-block" />
                                PHONE:
                            </h2>
                            <a href="tel:301-300-9318" class="leading-relaxed hover:underline">
                                +1 301-300-9318
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}