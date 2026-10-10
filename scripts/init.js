const auth = new Auth();

document.querySelector("#logout").addEventListener("click", (e) => {
  Auth.logOut();
});
