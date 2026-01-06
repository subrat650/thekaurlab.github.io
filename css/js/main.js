const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙";
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }
}

const searchInput = document.getElementById("siteSearch");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const term = this.value.toLowerCase();
    const elements = document.querySelectorAll(
      ".card, .person-card, h3, p"
    );

    elements.forEach(el => {
      el.style.display = el.textContent.toLowerCase().includes(term)
        ? ""
        : "none";
    });
  });
}
