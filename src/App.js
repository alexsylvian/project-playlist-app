import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';

let track = 0

function App() {
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);

  function readServer() {
    fetch("http://localhost:4001/songs")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSong(data[track].title);
        setArtist(data[track].artist)
      })
      .catch(error => {
        console.error("Error fetching songs:", error);
      });
  }

  function handleNextTrack() {
    track++
    readServer()
  }

  useEffect(() => {
    readServer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <button onClick={handleNextTrack}>NEXT</button>
        <h1>{song}</h1>
        <p>{artist}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
