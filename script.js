const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const closeMenu = document.querySelector(".close-menu");

const navLinks = document.querySelectorAll(".nav-list li a");


// Open menu
hamburger.addEventListener("click", () => {
  navbar.classList.add("active");
});

// Close menu
closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// Close menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});