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
  setTimeout(function () {
    backdrop.style.display = "none"; // For hacky solution to get opacity transition not be ignored.
  }, 2000);
}

// Register button event listeners
// Choose Plan
selectPlanButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    modal.classList.add("open");

    backdrop.style.display = "block"; // For hacky solution to get opacity transition not be ignored.
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
});

backdrop.addEventListener("click", function () {
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none"; // For hacky solution to get opacity transition not be ignored.
  }, 2000);

  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

// Mobile Nav
toggleButton.addEventListener("click", (e) => {
  // One approach
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";

  // Alternative
  mobileNav.classList.add("open");

  backdrop.style.display = "block"; // For hacky solution to get opacity transition not be ignored.
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});
