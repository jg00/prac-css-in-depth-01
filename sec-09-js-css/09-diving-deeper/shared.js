const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");

// console.dir(selectPlanButtons);
// console.log(selectPlanButtons);

for (let button of selectPlanButtons) {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
