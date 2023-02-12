import React from "react";


const DetailsBanner = ({ recipe }) => {
  return (
    <div 
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner">
        <h1>{recipe.recipe_name}</h1>
    </div>
    </div>
  );
};

export default DetailsBanner;