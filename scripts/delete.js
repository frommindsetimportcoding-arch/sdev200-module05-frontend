// using export in front of the function allows us to import it in another js file.

export async function deleteSong(songId) {
  // Request confirmation
  if (!confirm("Are you sure you want to delete this song?")) return;

  try {
    // Pass the id into the URL
    const response = await fetch(`http://localhost:3000/api/songs/${songId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Song deleted successfully");
      window.location.reload();
    } else {
      document.querySelector("#error").innerHTML = "Unable to delete the song";
    }
  } catch (err) {
    console.error("Error deleting song: ", err);
  }
}
