const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // TODO: Show the details page
      // document.location.replace("/profile");
      alert("you are now logged in!");
        } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const user_password = document.querySelector("#password-signup").value.trim();
  console.log(`${username} ${email} ${user_password}`);

  if (username && email && user_password) {
    const response = await fetch("/api/users", {
      method: 'POST',
      body: JSON.stringify({ username, email, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //TODO: show the details page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
