import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useState } from "react";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName("")
    setQuantity("")
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
  }

  return (
    <section className="form-container">
      <div>
        <h1 className="form-title">Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({values, handleChange, handleSubmit}) => (
        <form onSubmit={handleSubmit} className="form-content-container">
          <div className="two-column-row">
              <input className="input-left" 
                placeholder="Name"
                value={values.recipeName} 
                onChange={handleChange}
                name="recipeName" />
              <input className="input-right" 
                placeholder="Image Url" 
                value={values.imageURL} 
                onChange={handleChange}
                name="imageURL" />
            </div>
            <div className="radio-row">
              <div className="three-column-row" >
                <input 
                  name="cook" 
                  type="radio" 
                  value={values.cook} 
                  onChange={handleChange}
                  id="cook"/>
                <label for="cook">Cook</label>
              </div>
              <div className="three-column-row">
                <input  
                  name="bake" 
                  type="radio" 
                  value={values.bake} 
                  onChange={handleChange} 
                  id="bake"/>
                <label for="bake">Bake</label>
              </div>
              <div className="three-column-row">
                <input  
                  name="drink" 
                  type="radio"
                  value={values.drink} 
                  onChange={handleChange}  
                  id="drink"/>
                <label for="drink">Drink</label>
              </div>

            </div>
            <div className="three-column-row">
              <input 
                placeholder="Prep Time" 
                value={values.prepTime} 
                onChange={handleChange} 
                name="prepTime" />
              <input className="input-middle" 
                placeholder="Cook Time" 
                value={values.cookTime} 
                onChange={handleChange}
                name="cookTime" />
              <input 
                placeholder="Serves" 
                value={values.serves} 
                onChange={handleChange}
                name="serves" />
            </div>
            <div className="ingredient-form">
              <div className="two-column-b">
                <input className="input-left-column" 
                  placeholder="Ingredient" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <input className="input-left-column" 
                  placeholder="Quantity" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              <div className="two-column-b">
                <ul className="add-recipe-ul">
                  {ingredients.map((ingredient) => <li>{ingredient.quantity} {ingredient.name}</li>)}
                </ul>
              </div>
          </div>
          <div className="add-button">
              <button className="orange-add-btn"
                onClick={addIngredient}
                >Add another
                </button>
          </div>
          <div className="one-column-row">
            <textarea 
              name="instructions" 
              value={values.instructions} 
              onChange={handleChange}
              className="instruction-text-area">What are the instructions</textarea>
          </div>
          <div className="one-column-row">
            <button className="blue-btn recipe-add-btn">Save</button>
          </div>
        </form>
        )}
        </Formik>
      </div>
    </section>
  );
};

export default NewRecipeScreen;
