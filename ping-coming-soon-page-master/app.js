let form;
let email;

document.addEventListener("DOMContentLoaded", function(event) {
    form = document.getElementById("form");
    email = document.getElementById("email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        ValidateEmail(email.value) ? setStyle(true) : setStyle(false);
    });
});

function setStyle(isValid) {
    if (isValid) {
        email.style.borderColor = "hsl(223, 100%, 88%)";
        document.getElementById("error-msg").style.visibility = "hidden";
    } else {
        email.style.borderColor = "hsl(354, 100%, 66%)";
        document.getElementById("error-msg").style.visibility = "visible";
    }
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}