let status = "monthly";

function toogle() {
    status === "monthly" ? setAnnualy() : setMonthly();
}

function setMonthly() {
    document.getElementById("switch").style.transform = "translateX(28px)";
    document.getElementById("basic").innerHTML = "$19.99";
    document.getElementById("professional").innerHTML = "$24.99";
    document.getElementById("master").innerHTML = "$39.99";
    status = "monthly";
}

function setAnnualy() {
    document.getElementById("switch").style.transform = "translateX(0px)";
    document.getElementById("basic").innerHTML = "$199.99";
    document.getElementById("professional").innerHTML = "$249.99";
    document.getElementById("master").innerHTML = "$399.99";
    status = "annually";
}