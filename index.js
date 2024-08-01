let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");

let addModal = true;

addbtn.addEventListener("click", function () {
  if (addModal) {
    modal.style.display = "flex";
    addModal = false;
  } else {
    modal.style.display = "none";
    addModal = true;
  }
});

allPriorityColor[0].addEventListener("click", function () {
  allPriorityColor[0].classList.add("active");
});
