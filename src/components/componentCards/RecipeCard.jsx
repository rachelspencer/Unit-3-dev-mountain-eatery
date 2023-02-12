import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const { image_url, recipe_name, recipe_id } = recipe;
    
    return (
        <div className="recipe-card">
            <div className="img-container">
                <img src={image_url} alt="recipe-pic"/>
            </div>
            <div className="card-contents">
                <h2 className="medium-text recipe-name">{recipe_name}</h2>
                <Link to={`recipes/${recipe_id}`}>
                    <button className="blue-btn recipe-card-btn">See more</button>
                </Link>
            </div>
            
        </div>  
    );
};

export default RecipeCard;