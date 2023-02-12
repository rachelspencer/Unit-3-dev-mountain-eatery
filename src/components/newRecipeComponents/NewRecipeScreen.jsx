import React from "react";

const NewRecipeScreen = () => {
  return (
    <section className="form-container">
      <div>
        <h1 className="form-title">Tell us about your Recipe!</h1>
        <form className="form-content-container">
          <div className="two-column-row">
              <input className="input-left" placeholder="Name" name="name" />
              <input className="input-right" placeholder="Image Url" name="imageURL" />
            </div>
            <div className="radio-row">
              <div className="three-column-row" >
                <input name="cook-category" type="radio" value="cook" id="cook"/>
                <label for="cook">Cook</label>
              </div>
              <div className="three-column-row">
                <input  name="cook-category" type="radio"  value="bake" id="bake"/>
                <label for="bake">Bake</label>
              </div>
              <div className="three-column-row">
                <input  name="cook-category" type="radio" value="drink" id="drink"/>
                <label for="drink">Drink</label>
              </div>

            </div>
            <div className="three-column-row">
              <input placeholder="Prep Time" name="prepTime" />
              <input className="input-middle" placeholder="Cook Time" name="cookTime" />
              <input placeholder="Serves" name="serves" />
            </div>
            <div className="ingredient-form">
              <div className="two-column-b">
                <input className="input-left-column" placeholder="Ingredient" name="ingredient" />
                <input className="input-left-column" placeholder="Quantity" name="quantity" />
              </div>
              <div className="two-column-b">
                <ul className="add-recipe-ul">
                  <li>4 eggs</li>
                  <li>1 box cake</li>
                </ul>
              </div>
          </div>
          <div className="add-button">
              <button className="orange-add-btn">Add another</button>
          </div>
          <div className="one-column-row">
            <textarea className="instruction-text-area">What are the instructions</textarea>
          </div>
          <div className="one-column-row">
            <button className="blue-btn recipe-add-btn">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewRecipeScreen;
