//External Function For List Updater
function listUpdater(name) {
    const mainList = document.getElementById("selected")
    const nodeList = mainList.childNodes.length
    if (nodeList <= 5) {
        const list = document.createElement("li");
        list.innerText = name;
        mainList.appendChild(list);
    }
    else {
        alert("You Cant Select More than 5 Player")
    }

}



document.getElementById("neymar-btn").addEventListener('click', function () {
    document.getElementById("neymar-btn").disabled = true;
    listUpdater("Neymar");
}

)


document.getElementById("messi-btn").addEventListener('click', function () {
    document.getElementById("messi-btn").disabled = true;
    listUpdater("Messi");
}

)

document.getElementById("mbappe-btn").addEventListener('click', function () {
    document.getElementById("mbappe-btn").disabled = true;

    listUpdater("Mbappe");
}

)


document.getElementById("sanchez-btn").addEventListener('click', function () {
    document.getElementById("sanchez-btn").disabled = true;

    listUpdater("Sanchez");
}

)


document.getElementById("ramos-btn").addEventListener('click', function () {
    document.getElementById("ramos-btn").disabled = true;
    listUpdater("Ramos");
}

)


document.getElementById("vitor-btn").addEventListener('click', function () {
    document.getElementById("vitor-btn").disabled = true;
    listUpdater("vitor");
}

)


