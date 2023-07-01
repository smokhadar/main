const signInBtn = document.querySelector("#signInBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const container = document.querySelector(".container");
const signInBtnTwo = document.querySelector("#signInBtnTwo");
const signUpBtnTwo = document.querySelector("#signUpBtnTwo");


signUpBtn.addEventListener("click", () => {
    container.classList.add("signUpMode");
    // removes class so that content can be displayed w/o user having to refresh page
    window.addEventListener('resize', function(e) {
        container.classList.remove("signUpMode");
    });
});

signInBtn.addEventListener("click", () => {
    container.classList.remove("signUpMode");
});

signUpBtnTwo.addEventListener("click", () => {
    container.classList.add("signUpModeTwo");
});

signInBtnTwo.addEventListener("click", () => {
    container.classList.remove("signUpModeTwo");
});


// validates email format first, then calls validatePassword() when user types in email field
function validateEmail() {

    var emailField = document.getElementById("email-signup");
    var emailError = document.getElementById("email-error");
    var emailVal = document.getElementById("emailVal");
    var emailIconE = document.getElementById("error-icon-email");
    var passwordVal = document.getElementById("password-signup");

    // checks whether password format correct when user types in email field
    emailVal.addEventListener("keydown", validatePassword);
    passwordVal.addEventListener("keyup", validatePassword);

    // checks user input for regex pattern for email
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // changes styling if user input doesn't match regex pattern
        emailError.innerHTML = `Please enter a valid email`;
        emailVal.style.borderColor = "red";
        emailIconE.style.visibility = "visible";
        return false;
    }
    // if user input for email field correct format, no styling applied
    emailError.innerHTML = "";
    emailVal.style.borderColor = "";
    emailIconE.style.visibility = "";
    return true;
}

// validates password
function validatePassword() {

    var passwordField = document.getElementById("password-signup");
    var passwordError = document.getElementById("password-error");
    var passwordVal = document.getElementById("password-Val");
    var passwordIcon = document.getElementById("error-icon-p");
    
    // checks if user input in password matches regex pattern (8 characters made up of letters and numbers)
    if(!passwordField.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        
        // applies styles if does not match
        passwordError.innerHTML = `Minimum 8 characters with letters and numbers`;
        passwordVal.style.borderColor = "red";
        passwordIcon.style.visibility = "visible";
        return false;
    }
    // doesn't apply styles if password matches pattern
    passwordError.innerHTML = "";
    passwordVal.style.borderColor = "";
    passwordIcon.style.visibility = "";
    return true;
}

