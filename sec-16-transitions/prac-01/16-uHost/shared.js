// Choose plan
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal .modal__action--negative");

// Side nav
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const selectPlanButtons = document.querySelectorAll(".plan button");

// console.dir(backdrop);

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";

  if (modal) modal.classList.remove("open");

  backdrop.classList.remove("open");
}

// Register button event listeners
// Choose Plan
selectPlanButtons.forEach(button => {
  button.addEventListener("click", e => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

// Mobile Nav
toggleButton.addEventListener("click", e => {
  // One approach
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";

  // Alternative
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
