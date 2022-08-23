document.getElementById("calculate").addEventListener("click", function () {
    const list = document.getElementById("selected");
    const nodList = list.childNodes.length;

    const perPlayer = document.getElementById("player").value;

    const totalExpense = 5 * perPlayer;
    let playerExpense = document.getElementById("expense");

    playerExpense.innerText = totalExpense;
});
document.getElementById("total").addEventListener("click", function () {
    const total = document.getElementById("total-expense");
    const previous = document.getElementById("expense");
    const previousTotal = parseFloat(previous.innerText);
    const managerValue = document.getElementById("manager");
    const manager = parseFloat(managerValue.value);
    const coachValue = document.getElementById("coach");
    const coach = parseFloat(coachValue.value);
    const newTotal = previousTotal + manager + coach;
    const setTotal = document.getElementById("total-expense");
    setTotal.innerText = newTotal;
});
  //Total expense Calculation