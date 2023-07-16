import { useState } from "react"; 
import { useMutation } from '@apollo/client';
import { CREATE_RECIPE } from '../utils/mutations';

const AddRecipe = () => {
    //sets values to empty and allows them to be changed.
    const [title, setTitle] = useState(''); 
    const [serves, setServes] = useState(''); 
    const [cookingsteps, setCookingsteps] = useState([]); 
    const [ingredients, setIngredients] = useState([]); 
    const [cooktime, setCooktime] = useState(''); 

    //fetches the mutation to create a recipe
    const [createRecipe] = useMutation(CREATE_RECIPE); 

    const handleSubmit = async (event) => {
        console.log("Hey you pushed me!"); 
        // try {
        //     await createRecipe({
        //         variables: { title: title, serves: serves, cookingsteps: cookingsteps, ingredients: ingredients,  }
        //     })
        //     console.log(`Recipe was created Title:${title}`); 
        // } catch (err) {
        //     console.log(err); 
        // }
    
        // setTitle('');  
    }

    return ( 
    <div className="addRecipeContainer">
        <h2>Add a "Gerg"atizer</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                value={title}
                required
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <input 
                type="number" 
                name="serves" 
                required
                placeholder="How many does this serve?"
                value={serves}
                onChange={(e)=>{setServes(e.target.value)}}
            />
            <br/>
            <input 
                type="text" 
                name="cooktime" 
                required
                placeholder="How long does this take to cook?"
                value={cooktime}
                onChange={(e)=>{setCooktime(e.target.value)}}
            />
            <br/>
            <input 
                type="text" 
                name="ingredient1" 
                required
                placeholder="Write your list of ingredients."
                value={ingredients}
                onChange={(e)=>{setIngredients(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddRecipe;