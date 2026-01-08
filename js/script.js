console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const darkToggle = document.getElementById("darkToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  /* ===== LOAD THEME ===== */
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.classList.toggle("dark", savedTheme === "dark");
    darkToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", prefersDark);
    darkToggle.textContent = prefersDark ? "☀️" : "🌙";
  }

  /* ===== DARK MODE TOGGLE ===== */
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      darkToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  /* ===== MOBILE MENU ===== */
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

});

