function myfunc() {
    var email = document.getElementById("mail").value;
    var old = document.getElementById("pass1").value;
    var newp = document.getElementById("pass2").value;
    var passjs = document.getElementById("passjs");
    var mailjs = document.getElementById("mailjs");
    var fullName = document.querySelector('input[type="text"]').value;

    var errorMessages = [];

    if (fullName.trim() === "") {
        errorMessages.push("*Full Name is required");
    }

    if (email.trim() === "") {
        errorMessages.push("*Email is required");
    } else {
        let idx = email.search('@gmail.com');
        if (idx == -1) {
            errorMessages.push("*Please enter a valid email");
        }
    }

    if (old.trim() === "") {
        errorMessages.push("*Password is required");
    }

    if (newp.trim() === "") {
        errorMessages.push("*Retype Password is required");
    }

    if (!document.querySelector('input[type="checkbox"]').checked) {
        errorMessages.push("*You must accept the Terms & Conditions");
    }

    if (errorMessages.length > 0) {
        passjs.style.visibility = 'visible';
        passjs.innerHTML = errorMessages.join("<br>");
    } else {
        passjs.style.visibility = 'hidden';
        passjs.innerHTML = "";
        // Submit the form if all fields are valid
        document.querySelector('form').submit();
    }
}
