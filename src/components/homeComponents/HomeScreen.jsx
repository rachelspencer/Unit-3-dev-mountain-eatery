import React from 'react';
import AdBanner from './AdBanner';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen