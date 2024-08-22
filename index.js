let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");

let modalPriorityColor = "Black";
var uid = new ShortUniqueId();

let addModal = true;
let removeFlag = false;

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
    // console.log(allPriorityColor[i]);
    // console.log(allPriorityColor[i].classList);
    modalPriorityColor = allPriorityColor[i].classList[1];
    // console.log(modalPriorityColor);
  });
}

textArea.addEventListener("keydown", function (e) {
  // console.log(e);
  let key = e.key;
  if (key == "Enter") {
    let task = e.target.value;
    // console.log(task);
    createTicket(task);
    textArea.value = "";
    modal.style.display = "none";
    addModal = true;
  }
});

let id = uid.rnd();

function createTicket(task) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                        <div class="ticket-id">#${id}</div>
                        <div class="ticket-area">${task}</div>`;
  // console.log(ticketCont);
  mainCont.append(ticketCont);

  //handle delete of ticket
  ticketCont.addEventListener("click", function () {
    if (removeFlag) {
      ticketCont.remove();
    }
  });
}

removeBtn.addEventListener("click", function () {
  if (removeFlag) {
    removeBtn.style.color = "black";
    removeFlag = false;
  } else {
    removeBtn.style.color = "red";
    removeFlag = true;
  }
});
