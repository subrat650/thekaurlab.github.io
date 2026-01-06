/* =====================
   DARK MODE TOGGLE
   ===================== */

const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

/* Load saved theme */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️";
  }
});


/* =====================
   SEARCH FUNCTION
   ===================== */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  const searchableElements = document.querySelectorAll(
    "h1, h2, h3, p, li"
  );

  searchableElements.forEach(el => {
    if (el.textContent.toLowerCase().includes(query)) {
      el.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
    } else {
      el.style.backgroundColor = "transparent";
    }
  });
});
