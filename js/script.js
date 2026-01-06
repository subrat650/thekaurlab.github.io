console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const darkToggle = document.getElementById("darkToggle");

  if (!darkToggle) {
    console.error("darkToggle button NOT found");
  }

  /* ===== DARK MODE ===== */
  darkToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      darkToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  /* Load saved theme */
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
  }

