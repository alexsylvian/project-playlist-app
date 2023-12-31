import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import NavBar from "../components/NavBar";
import AddNewSong from "../components/AddNewSong";

function Home() {
  const [songs, setSongs] = useState([]);

  function handleAddSong(newSong) {
    setSongs([...songs, newSong]);
  }

  useEffect(() => {
    fetch("http://localhost:4001/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error(error));
  }, []);

  const songList = songs.map((song) => (
    <SongCard key={song.id} title={song.title} id={song.id} />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div className="space">
          {songList}
        </div>
        <AddNewSong onAddSong={handleAddSong} />
      </main>
    </>
  );
}

export default Home;
