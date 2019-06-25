const toggleButton = document.querySelector(".toggle-button");
const sideNav = document.querySelector(".side-nav");

toggleButton.addEventListener("click", function() {
  if (sideNav.classList.contains("open")) {
    sideNav.classList.remove("open");
    return;
  }
  sideNav.classList.add("open");
});
