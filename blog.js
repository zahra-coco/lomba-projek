const links = document.querySelectorAll(".nav-item a");
const indicator = document.getElementById("indicator");

function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
  indicator.style.opacity = "1";
}

const currentPage = location.pathname.split("/").pop();
let found = false;

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    moveIndicator(link);
    found = true;
  }

  link.addEventListener("click", () => moveIndicator(link));
});

window.addEventListener("load", () => {
  if (!found) {
    indicator.style.opacity = "0";
    indicator.style.width = "0";
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
