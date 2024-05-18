const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const error = document.querySelector(".signuperror");
const signUp = document.querySelector("#signupButton");

// Event listener for switching to the sign-up panel
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Event listener for switching to the sign-in panel
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const checkErrorAndClick = () => {
  if (error.innerText !== "") {
    // Click the signup button
    signUpButton.click();
  }
};

// Call the function when the page loads
window.addEventListener("load", checkErrorAndClick);
