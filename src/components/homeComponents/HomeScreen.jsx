import React from 'react';
import Banner from '../Banners/Banner';
import RecipeCard from '../componentCards/RecipeCard';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [term, setTerm] = useState('');

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        console.log(res.data)
        setRecipes(res.data)
      })
  };

  useEffect(() => {
    getRecipes()
  }, []);
  
  const handleSubmit = (searchTerm) => {
    setTerm(searchTerm);
  };

  return (
    <div >
      {recipes[2] && 
      <Banner 
        eyebrow={"New Recipe"} 
        recipe={recipes[2]} 
        description={"Looks delicious right! Become your own master chef and re-create this yourself. Happy food making!"}
        buttonText= {"Check it out"}
      />}
      <div className="recipe-content-container">
        <div className='search-bar-container'>
          <SearchBar handleSubmit={handleSubmit} />
        </div>
        <div className='recipe-card-container'>
          {
            recipes
              .filter((recipe) => recipe.recipe_name.toLowerCase().includes(term.toLowerCase()))
              .filter((recipe) => recipe.image_url)
              .slice(0, 3)
              .map((recipe) => (
                <RecipeCard key={recipe.recipe_id} recipe={recipe}/>
              ))
          }   
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;