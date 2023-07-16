import image from "../images/baking.png"; 
import recipeImg from "../images/spam.jpeg"; 
import AddRecipe from "../components/AddRecipe";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { FIND_RECIPES } from '../utils/queries';

const Recipes = () => {
    const { loading, data, error } = useQuery(FIND_RECIPES);
    const recipes = data?.findRecipes || []; 
    // console.log(recipes); 

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Cooking with Gerg"/> 
                <div>
                    <h2>"Gerg"atizers</h2>
                    <p>Chef Gerg is always making up some delicious meals for his kids when his wife leaves on trips. Below are some of his favorite recipes. Dads everywhere feel free to cook these when your beloved wife leaves. These are sure to liven up any occasion. </p>
                </div>
            </div>
            {recipes.map((recipe) => {
                return (
                <Accordion className="recipe-container" defaultActiveKey="1" key={recipe.id}>
                    <Accordion.Item eventKey="0" className="recipe-item">
                        <div className="edit-icon">
                            <Link to="/">
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </Link>
                        </div>
                        <Accordion.Header>
                            <div className="recipe-header">
                                <h2>{recipe.title}</h2>
                                <img className="recipe-img" src={recipeImg}></img>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p><span>Category: </span>{recipe.category}</p>
                            <p><span>Serves: </span>{recipe.serves}</p>
                            <p><span>Cook Time: </span>{recipe.cooktime}</p>
                            <p><span>Ingredients: </span></p>
                                <ul>
                                    {recipe.ingredients.map((ingredient) => {
                                        return (
                                            <li>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            <p><span>Cooking Steps: </span></p>
                            <ol>
                                {recipe.cookingsteps.map((step) => {
                                    return (
                                        <li>{step}</li>
                                    )
                                })}
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )})}
            <AddRecipe/>
        </div>
     );
}
 
export default Recipes;