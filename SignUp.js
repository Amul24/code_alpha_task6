function myfunc() {
    var email = document.getElementById("mail").value;
    var old = document.getElementById("pass1").value;
    var newp = document.getElementById("pass2").value;
    var passjs = document.getElementById("passjs");
    let mailjs = document.getElementById("mailjs");
    if (old !== newp) {
        passjs.style.visibility = 'visible';
        passjs.innerHTML = "*Passwords do not match" + "<br>";
    }
    else {
        passjs.style.visibility = 'hidden';
        passjs.innerHTML = "";
    }
    let idx = email.search('@gmail.com');
    if (idx == -1) {
        mailjs.style.visibility = 'visible';
        mailjs.innerHTML = "*Please enter valid email" + "<br>";
    }
    else {
        mailjs.style.visibility = 'hidden';
        mailjs.innerHTML = "";
    }
    if (old == newp && idx != -1) {
        window.location.href = "Home.html";
    }
}

function home() {
    window.location.href = "Home.html";
}
