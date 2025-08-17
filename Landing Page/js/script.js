function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }

    if (message === "") {
        alert("Please enter your message");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}