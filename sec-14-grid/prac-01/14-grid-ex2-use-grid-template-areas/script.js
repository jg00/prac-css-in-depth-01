const headerEl = document.querySelector(".header");
const sideEl = document.querySelector(".sidebar");

function showSide(e) {
  sideEl.classList.toggle("show");
}

headerEl.addEventListener("click", showSide);
