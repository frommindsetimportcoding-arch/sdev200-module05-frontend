// exported from delete.js to keep it modular
// also needed to tell index.html <script> tag that it was type="module" so that it
// can freely import the file for use.
import { deleteSong } from "./delete.js";

// We are going to make an event listener ... it will trigger with the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function () {
  // const response = await fetch(
  //   "https://sdev200-module05-backend.onrender.com/api/songs",
  // );
  const response = await fetch("http://localhost:3000/api/songs");
  const songs = await response.json();

  let html = "";
  for (let song of songs) {
    let songID = song._id;
    html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a>
    <button class="delete-btn" data-id="${songID}">Delete</button></li>`;
  }

  document.querySelector("#song_list").innerHTML = html;

  document
    .querySelector("#song_list")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        // Grabs the id from the buttons data attribute
        const songId = event.target.getAttribute("data-id");

        deleteSong(songId);
      }
    });
});
