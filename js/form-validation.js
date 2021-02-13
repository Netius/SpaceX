const form = document.querySelector("#contact");

const name = document.querySelector("#first_name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const message = document.querySelector("#comments");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const thanksMsg = document.querySelector("#thanks-message");
const paragraphHero = document.querySelector("#hero-contact-p");

form.addEventListener("submit", validateForm);

function validateForm() {
	event.preventDefault();

	// Checking if name is at least 5 char
	const nameValue = name.value;

	if (validateLength(nameValue, 5) === true) {
		nameError.style.display = "none";
		nameHasError = false;
	} else {
		nameError.style.display = "block";
		nameHasError = true;
	}

	// Checking message, at least 6 char
	const messageValue = message.value;

	if (validateLength(messageValue, 10) === true) {
		messageError.style.display = "none";
		messageHasError = false;
	} else {
		messageError.style.display = "block";
		messageHasError = true;
	}

	// Checking email
	const emailValue = email.value;

	if (
		validateEmail(emailValue) === true &&
		validateLength(emailValue, 6) === true
	) {
		emailError.style.display = "none";
		emailHasError = false;
	} else {
		emailError.style.display = "block";
		emailHasError = true;
	}

	// Decide whether to display the submitted message
	if (
		nameHasError === false &&
		messageHasError === false &&
		emailHasError === false
	) {
		form.style.display = "none";
		paragraphHero.style.display="none";
		thanksMsg.style.display ="block";
	}
}
// Checking character length for inputs
function validateLength(value, lengthToCheck) {
	const trimmedValue = value.trim();

	if (trimmedValue.length >= lengthToCheck) {
		return true;
	} else {
		return false;
	}
}
// Checks email for valid adress
function validateEmail(emailValue) {
	const regEx = /\S+@\S+\.\S+/;

	if (regEx.test(emailValue)) {
		return true;
	} else {
		return false;
	}
}
