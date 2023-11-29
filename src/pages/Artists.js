import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Artists() {
//   const [artists, setArtists] = useState([])

//   useEffect(() =>{
//     fetch("http://localhost:4000/artists")
//       .then(r => r.json())
//       .then(data => setArtists(data))
//       .catch(error => console.error(error))
//   }, [])

//   const directorList = artists.map(director =>{
//     return <article
//     key={director.id}
//     >
//       <h2>{director.name}</h2>
//       <ul>
//       {director.movies.map(movie => (
//         <li>{movie}</li>
//       ))}
//     </ul>
//     </article>
//   });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Artists Page</h1>
        {/* {directorList} */}
      </main>
    </>
  );
};

export default Artists;