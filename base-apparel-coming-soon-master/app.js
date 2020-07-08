function send() {
    let email = document.getElementsByTagName('input')[0].value;
    ValidateEmail(email) ?
        setDisplay('none') :
        setDisplay('block');
}

function setDisplay(displayAttr) {
    document.getElementById('error-message').style.display = displayAttr;
    document.getElementById('alert-ico').style.display = displayAttr;
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}