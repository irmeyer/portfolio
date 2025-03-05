// NAVBAR //

// Get elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle menu visibility on click
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show");
    }
});