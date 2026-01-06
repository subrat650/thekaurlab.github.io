console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const darkToggle = document.getElementById("darkToggle");
  const searchInput = document.getElementById("searchInput");

  if (!darkToggle) {
    console.error("darkToggle button NOT found");
  }

  if (!searchInput) {
    console.error("searchInput NOT found");
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

  /* ===== SEARCH ===== */
  searchInput?.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll("h1, h2, h3, p, li").forEach(el => {
      el.style.backgroundColor =
        query && el.textContent.toLowerCase().includes(query)
          ? "rgba(255,255,0,0.3)"
          : "transparent";
    });
  });

});
