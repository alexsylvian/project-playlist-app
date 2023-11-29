import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Song() {
  const [song, setSong] = useState({});
  const params = useParams();
  const songId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4001/songs/${songId}`)
    .then(r => r.json())
    .then(data => setSong(data))
    .catch(error => console.error(error));
  }, [songId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{song.title}</h1>
        <p>Runtime: {song.runtime}</p>
        <p>Artist: {song.artist}</p>
        <p>Genre: {song.genre}</p>
      </main>
    </>
  );
};

export default Song;