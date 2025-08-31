// Smooth scroll navbar hover removed -> CSS handles hover now

function myHome() {
  location.href = "#home";
}
function myAbout() {
  location.href = "#about";
}
function myServices() {
  location.href = "#services";
}
function myContact() {
  location.href = "#contact";
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile nav
function openNav() {
  document.getElementById("menu").classList.add("active");
}
function closeNav() {
  document.getElementById("menu").classList.remove("active");
}
