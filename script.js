const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeLabel = document.getElementById("darkModeLabel");

darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
  document.querySelector("main").classList.toggle("dark-mode");

  if (darkModeToggle.checked) {
    darkModeLabel.textContent = " Light Mode";
  } else {
    darkModeLabel.textContent = " Dark Mode";
  }
});
