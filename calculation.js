document.getElementById("calculate").addEventListener("click", function () {
    const list = document.getElementById("selected");
    const nodList = list.childNodes.length;

    const perPlayer = document.getElementById("player").value;

    const totalExpense = nodList * perPlayer;
    let playerExpense = document.getElementById("expense").innerText;

    playerExpense = totalExpense;
})

//Total expense Calculation



