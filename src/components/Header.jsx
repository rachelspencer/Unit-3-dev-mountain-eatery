import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="title">Devmountain Eatery</div>
      <nav className="nav-buttons">
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="newRecipe">
          <button>Add Recipe</button>
        </Link>  
      </nav>
    </header>
  );
};

export default Header;
