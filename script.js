"use strict";

// show success on input filed
const form = document.querySelector(".form");
const email = document.querySelector(".email");
const successMessage = document.querySelector(".success");

// show success on input filed

function validEmail(input) {
  const reTest =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reTest.test(input.value.trim())) {
    email.classList.add("success_border");
    successMessage.classList.add("submitted");
    successMessage.textContent = "Email Successfully Submitted";
    email.classList.remove("failed_border");
  } else {
    successMessage.classList.add("active");
    email.classList.add("failed_border");
    email.classList.remove("success_border");
  }
}

// checking input field
function checkInput(input) {
  if (input.value.trim() == "") {
    successMessage.classList.remove("active");
  } else {
    successMessage.classList.add("active");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput(email);
  validEmail(email);
});
