import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="navbar"
      >
        Home
      </NavLink>
      <NavLink
        to="/artists"
        className="navbar"
      >
        Artists
      </NavLink>
      <NavLink
        to="/genres"
        className="navbar"
      >
        Genres
      </NavLink>
      <NavLink
        to="/addNewSong"
        className="navbar"
      >
        Add New Song
      </NavLink>
    </nav>
  );
};

export default NavBar;