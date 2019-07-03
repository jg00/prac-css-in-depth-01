const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(selectPlanButtons);
// console.log(selectPlanButtons);

// Accessing properties from within JS code.
// console.dir(backdrop.style.backgroundImage);  // Like accessing from a variable from an object ie dashes not allowed.
// console.dir(backdrop.style["background-image"]);

for (let button of selectPlanButtons) {
  button.addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open' // This approach will overwrite the complete class list
    modal.classList.add("open");

    /* For backdrop transition to work */
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }

  /* For backdrop transition to work */
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200); /* Delay has to match .backdrop duration of transition of 0.2s (shared.css) */
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");

  /* For backdrop transition to work */
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

// Animation events
ctaButton.addEventListener("animationstart", function(event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function(event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function(event) {
  console.log("Animation iteration", event);
});
