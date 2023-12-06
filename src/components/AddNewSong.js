import React, { useState } from "react";

function AddNewSong({ onAddSong }) {
    const [songTitle, setSongTitle] = useState("");
    const [runtime, setRuntime] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        if (!songTitle || !runtime || !artist || !genre) {
          alert("Please fill in all fields.");
          return;
        }

        const newSongObject = {
            title: songTitle,
            runtime: runtime,
            artist: artist,
            genre: genre
        }

        fetch("http://localhost:4001/songs", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newSongObject),
      })
      .then(res => res.json())
      .then(resData => {
        onAddSong(resData)

        setSongTitle("");
        setRuntime("");
        setArtist("");
        setGenre("");
      })
    } 

    return (
        <>
          <main>
            <h1>Add New Song</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Song Title:
                <input
                  type="text"
                  value={songTitle}
                  onChange={(e) => setSongTitle(e.target.value)}
                />
              </label>
              <br />
              <label>
                Runtime:
                <input
                  type="text"
                  value={runtime}
                  onChange={(e) => setRuntime(e.target.value)}
                />
              </label>
              <br />
              <label>
                Artist:
                <input
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </label>
              <br />
              <label>
                Genre:
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </main>
        </>
      );
    }

export default AddNewSong;