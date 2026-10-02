addEventListener("DOMContentLoaded", async function () {
  // Grab the search params from the url after the question mark.
  const urlparam = new URLSearchParams(window.location.search);
  const songID = urlparam.get("id");
  console.log(songID);

  // Need to update this with the render url when the time comes. I would leave this commented out to make it easier to work with locally.
  const response = await fetch("http://localhost:3000/api/songs/" + songID);
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
