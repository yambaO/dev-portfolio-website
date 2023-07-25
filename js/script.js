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