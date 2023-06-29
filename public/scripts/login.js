const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(username, password);
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // TODO: Show the details page
      document.location.replace("/chat", { response: response });
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const user_password = document.querySelector("#password-signup").value.trim();
  console.log(`${username} ${email} ${user_password}`);

  if (username && email && user_password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, user_password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //TODO: show the details page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#btnLogin").addEventListener("click", loginFormHandler);
document
  .querySelector("#btnSignup")
  .addEventListener("click", signupFormHandler);
// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
