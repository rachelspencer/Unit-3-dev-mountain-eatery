const RecipeCard = ({ recipe }) => {

    return (
        <div className="recipe-card">
            <div className="img-container">
                <img src={recipe.image_url} alt="recipe-pic"/>
            </div>
            <div className="card-contents">
                <h2 className="medium-text recipe-name">{recipe.recipe_name}</h2>
                <button className="blue-btn recipe-card-btn">See more</button>
            </div>
            
        </div>  
    );
};

export default RecipeCard;