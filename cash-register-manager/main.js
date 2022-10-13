const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkButton = document.querySelector("#button");
const message = document.querySelector("#displayMessage");
const noOfNotes = document.querySelectorAll(".tabelNote");

const Notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validBillCashAmount() {
  hiddenMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value; 
      calChange(amountToBeReturned);
    } else{
      showMessage("Given cash is less please pay full amount?");
    }
  } else if (billAmount.value ==0 || cashGiven.value==0){
    showMessage("Invalid Bill Amount");
  }else{
    showMessage("Invalid Bill Amount");
  }
});

function calChange(amountToBeReturned) {
  for (let i = 0; i < Notes.length; i++) { 
    const numberOfNotes = Math.trunc(amountToBeReturned / Notes[i]);  
    amountToBeReturned = amountToBeReturned % Notes[i]; 
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hiddenMessage() {
  message.style.display = "none";
}

function showMessage(msgvalue) {
  message.style.display = "block";
  message.innerText = msgvalue;
}