// src/components/Test.js

import React from "react";

// Test | exported to App.js
// Testing ground for various objects

export default function Test() {
    return (
        <div class="relative inline-block text-black">
            <button class="bg-white p-4">Dropdown</button>
            <div class="absolute bg-gray-500 inline-column">
                <a href="/test">Link 1</a>
                <a href="/test">Link 2</a>
                <a href="/test">Link 3</a>
            </div>
        </div>
    )
}