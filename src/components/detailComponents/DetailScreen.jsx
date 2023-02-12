import axios from 'axios';
import React, { useState, useEffect} from 'react'
import Banner from '../Banners/Banner';
import { useParams } from 'react-router-dom';

const DetailScreen = () => {  
  const [recipe, setRecipe] = useState(null)
  const { recipe_id } = useParams();
  console.log(recipe_id)

  const getRecipeById = (id) => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data)
     })
  };

  // const renderIngredients = () => {
  //   if (!recipe.ingredients.length) {
  //     return (
  //       <p></p>
  //     );
  //   }

  //   return (
  //     <ul><li></li></ul>
  //   )
  // }

  useEffect(() => {
    getRecipeById(recipe_id);
  }, [recipe_id])

  return (
    <div>
     {recipe && (
        <>
          <div className="details-top">
            <Banner
              recipe={recipe}
            />
          </div>
          <div className="details-bottom">
            <div className='detail-content-container'>
              <div className='recipe-ingredients-card'>
                <div className="recipe-details">
                  <h2 className="medium-text detailed-page-headings">Recipe</h2>
                  <div className='detailed-page-p'>
                    <p>Prep Time: {recipe.prep_time}</p>
                    <p>Cook Time: {recipe.cook_time}</p>
                    <p>Serves: {recipe.serves}</p>
                  </div>
                </div>
              </div>
              <div className="ingredients-list">
                <h2 className="medium-text detailed-page-headings">Ingredients</h2>
                {
                  recipe.ingredients.length
                    ? (
                      <ul>
                        {recipe.ingredients.map((ingredient) => <li key={recipe.ingredients.ingredient_id}>{ingredient.ingredient}</li>)}
                      </ul>
                    ) : (
                      <p className='empty-ingredients'>No ingredients</p>
                    )                 
                }
              </div>
            </div>
            <div className='instructions-paragraph-card'>
              <h2 className="medium-text detailed-page-headings">Instructions</h2>
              <div className='detailed-page-p'>
                <p>{recipe.instructions}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default DetailScreen;