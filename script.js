
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;

document.getElementById("theme-toggle").addEventListener("click", () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
});





const links = document.querySelectorAll(".links a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
