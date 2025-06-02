document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });
  }

  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const destination = this.getAttribute("href");
      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location.href = destination;
      }, 400);
    });
  });
});