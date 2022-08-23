document.getElementById("calculate").addEventListener("click", function () {
    const mainList = document.getElementById("selected");
    const nodeList = mainList.childNodes.length;

    const perPlayer = document.getElementById("player").value;

    const totalExpense = nodeList * perPlayer;
    let playerExpense = document.getElementById("expense").innerText;

    playerExpense = totalExpense;
})

//Total expense Calculation



