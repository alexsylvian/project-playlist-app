import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NavBar from "../components/NavBar";


function Genres() {
    const [genres, setGenres] = useState([])

    useEffect(() =>{
      fetch("http://localhost:4001/genres")
        .then(r => r.json())
        .then(data => setGenres(data))
        .catch(error => console.error(error))
    }, [])
  
    const genreList = genres.map(genre => (
      <article key={genre.id}>
        <h2>{genre.name}</h2>
        <ul>
          {genre.songs.map(song => (
            <li key={uuidv4()}>{song}</li>
          ))}
        </ul>
      </article>
    ))

    return(
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Genres Page</h1>
                <div className="double-space">
                  {genreList}
                </div>
            </main>
        </>
    )
}

export default Genres;