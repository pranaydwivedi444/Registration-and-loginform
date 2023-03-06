const registrationForm = document.querySelector(".registration");
const LoginForm = document.querySelector(".sign-in");
const ChangesignupBtn = document.querySelector(".sign_up_acc");
const ChangeLoginBtn = document.querySelector(".login");
const form = document.getElementById("form");
const form2 = document.getElementById("form2");

const password2 = document.getElementById("repeat_password");
const username = document.querySelector(".full_name");
const email = document.querySelector(".email_id");
const password = document.querySelector(".password");
const username1 = document.querySelector(".full_name1");
const email1 = document.querySelector(".email_id1");
const password1 = document.querySelector(".password1");
const succesmsgLogin = document.querySelector(".succesmsgLogin");
const succesmsgRegister = document.querySelector(".succesmsgRegister");
let registration = false;
let loginSuccess = true;
const showPasswordBtn = document.querySelectorAll(".show_pass");
// console.log(showPasswordBtn);

//change forms function
function toggleForms() {
  registration = !registration;
  LoginForm.classList.toggle("hidden");
  registrationForm.classList.toggle("hidden");
}

//Display Errors
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  element.classList.add("error");
  element.classList.remove("success");
  loginSuccess = false;
};
// Display Successs
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  element.classList.add("success");
  element.classList.remove("error");
};
//valdiating email
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//valid inputs for registration form
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  if (loginSuccess) {
    succesmsgRegister.classList.remove("hidden");
  }
};

//validate inputs 2
const validateInputs2 = () => {
  loginSuccess = true;
  const usernameValue = username1.value;
  const emailValue = email1.value;
  const passwordValue = password1.value;

  if (usernameValue === "") {
    setError(username1, "Username is required");
  } else {
    setSuccess(username1);
  }

  if (emailValue === "") {
    setError(email1, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email1, "Provide a valid email address");
  } else {
    setSuccess(email1);
  }

  if (passwordValue === "") {
    setError(password1, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password1, "Password must be at least 8 character.");
  } else {
    setSuccess(password1);
  }

  if (loginSuccess) {
    succesmsgLogin.classList.remove("hidden");
  }
};
//show password function
function togglePassword(element) {
  const container = element.parentElement;
  const passwordField = container.querySelector("input");
  //   console.log(element, container, passwordField, passwordField.type);
  element.classList.toggle("fa-eye-slash");
  element.classList.toggle("fa-eye");

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
//Initializign event listeners
function inint() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
  });
  form2.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs2();
  });

  ChangeLoginBtn.addEventListener("click", toggleForms);
  ChangesignupBtn.addEventListener("click", toggleForms);
  showPasswordBtn.forEach((el) => {
    el.addEventListener("click", () => togglePassword(el));
  });
}
inint();
