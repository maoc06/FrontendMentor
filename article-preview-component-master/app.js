function onClickShare() {
    let dialog = document.getElementById("dialog");
    console.log(dialog.style.display);
    if (dialog.style.display === "none") {
        dialog.style.display = "flex";
        setShareIconStyles(true);
    } else {
        dialog.style.display = "none";
        setShareIconStyles(false);
    }
}

function setShareIconStyles(isActive) {
    let shareContainer = document.getElementsByClassName("share")[0];
    let shareIco = shareContainer.children[0];
    if (isActive) {
        shareContainer.style.backgroundColor = "hsl(214, 17%, 51%)";
        shareIco.style.color = "white";
    } else {
        shareContainer.style.backgroundColor = "hsl(210, 46%, 95%)";
        shareIco.style.color = "hsl(214, 17%, 51%)";
    }
}