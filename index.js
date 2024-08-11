let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");

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

textArea.addEventListener("keydown", function (e) {
  // console.log(e);
  let key = e.key;
  if (key == "Enter") {
    createTicket();
    textArea.value = "";
    modal.style.display = "none";
    addModal = true;
  }
});

function createTicket() {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color red"></div>
                        <div class="ticket-id">#gcvdvcjkj</div>
                        <div class="ticket-area">Detail of your task</div>`;
  console.log(ticketCont);
  mainCont.append(ticketCont);
}
