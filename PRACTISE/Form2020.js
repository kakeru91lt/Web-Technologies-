function validate() {
    var name = document.myform.name.value;
    var phone = document.myform.ph.value;
    var email = document.myform.email.value;

    // Check if the name is empty
    if (name === "") {
        alert("Please enter your name!");
        document.myform.name.focus();
        return false;
    }

    // Check if the phone is empty and contains only numbers
    if (phone === "" || isNaN(phone)) {
        alert("Please enter a valid phone number!");
        document.myform.ph.focus();
        return false;
    }

    // Check if the email is empty and follows a basic email format
    if (email === "" || !isValidEmail(email)) {
        alert("Please enter a valid email address!");
        document.myform.email.focus();
        return false;
    }

    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
