"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    let isDarkMode = false;
    body.style.backgroundColor = '#f8f8f8';
    const darkModeButton = document.getElementById('darkMode');
    if (darkModeButton instanceof HTMLElement) {
        const toggleDarkMode = () => {
            if (isDarkMode) {
                body.style.backgroundColor = '#f8f8f8';
                body.style.color = '#000000';
                darkModeButton.classList.remove('hover:bg-gray-700');
                darkModeButton.classList.add('hover:bg-gray-300');
            }
            else {
                body.style.backgroundColor = '#1a1a1a';
                body.style.color = '#f0f0f0';
                darkModeButton.classList.remove('hover:bg-gray-300');
                darkModeButton.classList.add('hover:bg-gray-700');
            }
            isDarkMode = !isDarkMode;
        };
        darkModeButton.addEventListener('click', toggleDarkMode);
    }
    else {
        console.error('Element with ID "darkMode" not found');
    }
});
