addEventListener("DOMContentLoaded", async function () {
  // Grab the search params from the url after the question mark.
  const urlparam = new URLSearchParams(window.location.search);
  const songID = urlparam.get("id");
  console.log(songID);

  const response = await fetch(
    "https://sdev200-module05-backend.onrender.com/api/songs/" + songID,
  );
  // Local test fetch below. Uncomment during testing.
  // const response = await fetch("http://localhost:3000/api/songs/" + songID);
  const song = await response.json();
  console.log(song);

  let heading = "";
  heading += `${song.title}`;
  document.querySelector("h1").innerHTML = heading;

  let html = "";
  html += `
    <h2>Artist - ${song.artist} </h2>
    <p>Popularity - ${song.popularity} </p>
    <p>Release Date - ${song.releaseDate} </p>`;

  document.querySelector("div").innerHTML = html;
});
