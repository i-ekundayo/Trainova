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


// Form Validation
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMessage.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameInput.nextElementSibling.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailInput.nextElementSibling.textContent = "Email is required";
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    messageInput.nextElementSibling.textContent = "Message cannot be empty";
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});