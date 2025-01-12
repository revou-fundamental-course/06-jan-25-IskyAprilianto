// Toggle class active
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Ketika menu di klik
document.querySelector(".menu").onclick = () => {
  nav.classList.toggle("active");
};
