function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get the navbar element
const navbar = document.getElementById("desktop-nav");

// Get the offset position of the navbar
const navbarOffset = navbar.offsetTop;

// Function to add the "sticky" class to the navbar when scrolling
function stickyNavbar() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Call the stickyNavbar function on page load and on scroll
window.addEventListener("load", stickyNavbar);
window.addEventListener("scroll", stickyNavbar);

/* Hide the title and description initially */


document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".title");
    const descriptionElement = document.querySelector(".section__text__p2");
    const titleText = "Hi, I'm Yamba Ouandaogo";
    const descriptionText = "Full Stack Software Engineer";

    const clearAndTypeWriter = (element, text) => {
        element.textContent = ""; // Clear existing text
        let charIndex = 0;
        const type = () => {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed here (lower value for faster typing)
            }
        };
        type();
    };

    clearAndTypeWriter(titleElement, titleText);
    setTimeout(() => clearAndTypeWriter(descriptionElement, descriptionText), 1500); // Delay between title and description
});