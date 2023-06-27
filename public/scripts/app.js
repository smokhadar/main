const signInBtn = document.querySelector("#signInBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const container = document.querySelector(".container");
const signInBtnTwo = document.querySelector("#signInBtnTwo");
const signUpBtnTwo = document.querySelector("#signUpBtnTwo");

signUpBtn.addEventListener("click", () => {
    container.classList.add("signUpMode");
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