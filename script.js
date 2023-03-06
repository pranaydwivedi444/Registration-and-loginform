const registrationForm = document.querySelector(".registration");
const LoginForm = document.querySelector(".sign-in");
const ChangesignupBtn = document.querySelector(".sign_up_acc");
const ChangeLoginBtn = document.querySelector(".login");

//error message display
//check email
//check password
//check terms and condition
//toglle singup
//show password
ChangeLoginBtn.addEventListener("click", toggleForms);
ChangesignupBtn.addEventListener("click", toggleForms);

function toggleForms() {
  LoginForm.classList.toggle("hidden");
  registrationForm.classList.toggle("hidden");
}
