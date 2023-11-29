import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import NavBar from "../components/NavBar";

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/songs")
      .then((r) => r.json())
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
        {songList}
      </main>
    </>
  );
}

export default Home;
