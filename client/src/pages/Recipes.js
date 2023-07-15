import image from "../images/baking.png"; 
import recipeImg from "../images/spam.jpeg"; 
// import AddBlog from "../components/AddBlog";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { FIND_RECIPES } from '../utils/queries';

const Recipes = () => {
    // const { loading, data, error } = useQuery(FIND_RECIPES);
    // const recipes = data?.findRecipes || []; 
    // console.log(recipes); 

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    // if (error) {
    //     return <div>{error.message}</div>
    // }

    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Cooking with Gerg"/> 
                <div>
                    <h2>"Gerg"atizers</h2>
                    <p>Chef Gerg is always making up some delicious meals for his kids when his wife leaves on trips. Below are some of his favorite recipes. Dads everywhere feel free to cook these when your beloved wife leaves. These are sure to liven up any occasion. </p>
                </div>
            </div>
            <Accordion className="recipe-container" defaultActiveKey="1" key="1">
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
                            <h2>Fried Spam</h2>
                            <img className="recipe-img" src={recipeImg}></img>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p><span>Category: </span>Breakfast</p>
                        <p><span>Serves: </span>4</p>
                        <p><span>Cook Time: </span>15 mins</p>
                        <p><span>Ingredients: </span></p>
                        <ul>
                            <li>Spam</li>
                        </ul>
                        <p><span>Cooking Steps: </span></p>
                        <ol>
                            <li>Cook spam in a pan over the stove top until browned.</li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
     );
}
 
export default Recipes;