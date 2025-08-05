var button = document.getElementById("theme-toggle");
var html = document.documentElement;

var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark-mode");
  if (button) {
    button.textContent = "Switch to Light Mode";
  }
} else {
  if (button) {
    button.textContent = "Switch to Dark Mode";
  }
}

if (button) {
  button.addEventListener("click", function () {
    html.classList.toggle("dark-mode");

    var isDark = html.classList.contains("dark-mode");

    if (isDark) {
      button.textContent = "Switch to Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      button.textContent = "Switch to Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}