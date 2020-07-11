let currTheme = "light";

function themeToogle() {
    currTheme === "light" ? setDarkTheme() : setLightTheme();
}

function setLightTheme() {
    currTheme = "light";
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("indicator").style.transform = "translateX(20px)";
}

function setDarkTheme() {
    currTheme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("indicator").style.transform = "translateX(0px)";
}