import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Genres() {
    const [genres, setGenres] = useState([])

    useEffect(() =>{
      fetch("http://localhost:4001/genres")
        .then(r => r.json())
        .then(data => setGenres(data))
        .catch(error => console.error(error))
    }, [])
  
    const genreList = genres.map(genre =>{
      return <article
      key={genre.id}
      >
        <h2>{genre.name}</h2>
        <ul>
        {genre.songs.map(song => (
          <li>{song}</li>
        ))}
      </ul>
      </article>
    });

    return(
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Genres Page</h1>
                {genreList}
            </main>
        </>
    )
}

export default Genres