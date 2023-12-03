import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NavBar from "../components/NavBar";

function Artists() {
  const [artists, setArtists] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4001/artists")
      .then(r => r.json())
      .then(data => setArtists(data))
      .catch(error => console.error(error))
  }, [])

  const artistList = artists.map(artist =>{
    return <article
    key={artist.id}
    >
      <h2>{artist.name}</h2>
      <ul>
      {artist.songs.map(song => (
        <li key={uuidv4()}>{song}</li>
      ))}
    </ul>
    </article>
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Artists Page</h1>
        <div className="double-space">
          {artistList}
        </div>
      </main>
    </>
  );
};

export default Artists;