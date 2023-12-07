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
    </nav>
  );
};

export default NavBar;