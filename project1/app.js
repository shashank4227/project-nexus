const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const validateSignIn = () => {
  let isValid = true;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  if (!username) {
    isValid = false;
    usernameError.textContent = "Username is required";
  } else {
    usernameError.textContent = "";
  }

  if (!password) {
    isValid = false;
    passwordError.textContent = "Password is required";
  } else {
    passwordError.textContent = "";
  }

  return isValid;
};

const validateSignUp = () => {
  let isValid = true;
  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const usernameError = document.getElementById("signup-username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("signup-password-error");

  if (!username) {
    isValid = false;
    usernameError.textContent = "Username is required";
  } else {
    usernameError.textContent = "";
  }

  if (!email) {
    isValid = false;
    emailError.textContent = "Email is required";
  } else {
    emailError.textContent = "";
  }

  if (!password) {
    isValid = false;
    passwordError.textContent = "Password is required";
  } else {
    passwordError.textContent = "";
  }

  return isValid;
};

// Form submission
document.getElementById("signin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateSignIn()) {
    // Submit form
    alert("Sign in successful!");
  }
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateSignUp()) {
    // Submit form
    alert("Sign up successful!");
  }
});
