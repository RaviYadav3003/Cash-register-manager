const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkButton = document.querySelector("#button");
const message = document.querySelector("#displayMessage");
const noOfNotes = document.querySelectorAll(".tabelNote");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validBillCashAmount() {
  hideMessage();
  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value; 
      calChange(amountToBeReturned);
    } else if(billAmount.value >= cashGiven.value){
      showMessage("Given cash is less please pay full amount?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) { 
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);  
    amountToBeReturned = amountToBeReturned % availableNotes[i]; 
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}