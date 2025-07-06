// Animate placeholder text like typing
const input = document.querySelector("input[type='text']");
const placeholderText = "Search for restaurant, cuisine or a dish";
let index = 0;

function typePlaceholder() {
    if (index < placeholderText.length) {
        input.setAttribute("placeholder", placeholderText.slice(0, index + 1));
        index++;
        setTimeout(typePlaceholder, 100);
    } else {
        setTimeout(() => {
            index = 0;
            input.setAttribute("placeholder", "");
            setTimeout(typePlaceholder, 300);
        }, 2000); // Hold for 2 seconds before clearing
    }
}
typePlaceholder();

// Add header shrink on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.style.padding = "0.5rem 1.5rem";
        header.style.backgroundColor = "#c62838";
    } else {
        header.style.padding = "1rem 2rem";
        header.style.backgroundColor = "#e23744";
    }
});
