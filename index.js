let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");
let allFilterColor = document.querySelectorAll(".color");

let color = ["red", "blue", "green", "black"];
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
                        <div class="ticket-area" contenteditable="false">${task}</div>
                        <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`;
  // console.log(ticketCont);
  mainCont.append(ticketCont);

  //handle delete of ticket
  ticketCont.addEventListener("click", function () {
    if (removeFlag) {
      ticketCont.remove();
    }
  });

  //Handle priority color change
  let ticketColor = ticketCont.querySelector(".ticket-color");

  ticketColor.addEventListener("click", function () {
    // console.log(ticketColor.classList[1]);
    let currColor = ticketColor.classList[1];
    let currColorIndex = -1;
    for (let i = 0; i < color.length; i++) {
      if (color[i] == currColor) {
        currColorIndex = i;
        break;
      }
    }
    // console.log(currColorIndex);
    let nextColorindex = (currColorIndex + 1) % color.length;
    let nextColor = color[nextColorindex];
    // console.log(nextColor);
    ticketColor.classList.remove(currColor);
    ticketColor.classList.add(nextColor);
  });

  //handle lock and unlock icon
  let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
  let taskArea = ticketCont.querySelector(".ticket-area");
  lockUnlockBtn.addEventListener("click", function () {
    // console.log(lockUnlockBtn);
    if (lockUnlockBtn.classList.contains("fa-lock")) {
      lockUnlockBtn.classList.remove("fa-lock");
      lockUnlockBtn.classList.add("fa-lock-open");
      taskArea.setAttribute("contenteditable", "true");
    } else {
      lockUnlockBtn.classList.remove("fa-lock-open");
      lockUnlockBtn.classList.add("fa-lock");
      taskArea.setAttribute("contenteditable", "false");
    }
  });
}

for (let j = 0; j < allFilterColor.length; j++) {
  allFilterColor[j].addEventListener("click", function () {
    let allTicketsColor = document.querySelectorAll(".ticket-color");
    let currentSelected = allFilterColor[j].classList[1];

    for (let i = 0; i < allTicketsColor.length; i++) {
      let currentTicketColor = allTicketsColor[i].classList[1];

      if (currentSelected == currentTicketColor) {
        allTicketsColor[i].parentElement.style.display = "block";
      } else {
        allTicketsColor[i].parentElement.style.display = "none";
      }
    }
  });

  allFilterColor[j].addEventListener("dblclick", function () {
    let allTicketColor = document.querySelectorAll(".ticket-color");
    for (let i = 0; i < allTicketColor.length; i++) {
      allTicketColor[i].parentElement.style.display = "block";
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
