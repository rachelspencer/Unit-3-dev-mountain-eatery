import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ buttonText, description, eyebrow, recipe }) => {
    const { image_url, recipe_name, recipe_id } = recipe;
  return (
    <div 
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="banner"
    >
        {eyebrow && <h3>{eyebrow}</h3>}
        {recipe_name && <h1>{recipe_name}</h1>}
        {description && <p className="banner-p">{description}</p>}
        {buttonText && <Link to={`recipes/${recipe_id}`}>
          <button className="blue-btn">{buttonText}</button>
        </Link>}
    </div>
  );
};

export default Banner;