// document.querySelector("#logout").addEventListener("click", (e) => {
//   auth.logOut();
// });

window.onload = function () {
  const buttonSelector = document.getElementById("button-selector");
  const isAuthenticated = localStorage.getItem("auth") == 1;

  if (isAuthenticated) {
    const logoutBtn = document.createElement("button");
    logoutBtn.id = "logout";
    logoutBtn.innerText = "Logout";

    logoutBtn.addEventListener("click", () => Auth.logOut());

    buttonSelector.appendChild(logoutBtn);
  } else {
    const loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.innerText = "Login";

    loginBtn.addEventListener("click", () => {
      window.location.href = "/login.html";
    });

    buttonSelector.appendChild(loginBtn);
  }
};
