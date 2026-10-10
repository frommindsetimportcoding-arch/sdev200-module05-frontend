let token;
let uname;
let auth;

window.onload = function () {
  document
    .querySelector("#loginBtn")
    .addEventListener("click", async function () {
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
      login(username, password);
    });
};

async function login(username, password) {
  const login_cred = {
    username,
    password,
  };
  // Send the login post request to the backend
  // Uncomment localhost for testing.
  //   const response = await fetch(
  //     "http://localhost:3000/api/auth",
  const response = await fetch(
    "https://sdev200-module05-backend.onrender.com/api/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_cred),
    },
  );

  if (response.ok) {
    // Thake the token and save it to storage
    const tokenResponse = await response.json();
    token = tokenResponse.token;
    uname = tokenResponse.username2;
    auth = tokenResponse.auth;
    console.log(token);

    // Save it
    localStorage.setItem("token", token);
    localStorage.setItem("uname", uname);
    localStorage.setItem("auth", auth);

    // redirect
    const repoPath = window.location.pathname.split("/")[1];
    window.location.replace(`${window.location.origin}/${repoPath}/index.html`);
  } else {
    document.querySelector("#errorMsg").innerHTML =
      "Bad username and password.";
  }
}
