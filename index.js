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

for (let i = 0; i < allPriorityColor.length; i++) {
  allPriorityColor[i].addEventListener("click", function () {
    for (let j = 0; j < allPriorityColor.length; j++) {
      if (allPriorityColor[j].classList.contains("active")) {
        allPriorityColor[j].classList.remove("active");
      }
    }
    allPriorityColor[i].classList.add("active");
  });
}
