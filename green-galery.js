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

const reveal = document.querySelector(".box-sampah");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;
  const boxTop = reveal.getBoundingClientRect().top;

  if (boxTop < trigger) {
    reveal.classList.add("show");
  }
}

window.addEventListener("scroll", showOnScroll);

const fakta = document.getElementById("faktaCards");

function showFakta() {
  const rect = fakta.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    fakta.classList.add("show");
  }
}

window.addEventListener("scroll", showFakta);
window.addEventListener("load", showFakta);

const dampak = document.getElementById("dampakCards");

function showDampak() {
  const rect = dampak.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    dampak.classList.add("show");
  }
}

window.addEventListener("scroll", showDampak);
window.addEventListener("load", showDampak);

const kegiatan = document.getElementById("kegiatanSteps");

function showKegiatan() {
  const rect = kegiatan.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    kegiatan.classList.add("show");
  }
}

window.addEventListener("scroll", showKegiatan);
window.addEventListener("load", showKegiatan);
