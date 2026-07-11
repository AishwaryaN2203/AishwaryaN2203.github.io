// ===== Theme toggle (persists across visits) =====
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
else if (window.matchMedia("(prefers-color-scheme: light)").matches)
  root.setAttribute("data-theme", "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ===== Mobile menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
