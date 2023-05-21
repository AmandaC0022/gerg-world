import { useState } from "react"; 
import { useMutation } from '@apollo/client';
import { CREATE_GERGAL } from '../utils/mutations';

const AddGergal = () => {
    const [word, setWord] = useState(''); 
    const [definition, setDefinition] = useState(''); 

    const [createGergal] = useMutation(CREATE_GERGAL); 

    const handleSubmit = async (event) => {
        // event.preventDefault(); 
        try {
            await createGergal({
                variables: { word: word, definition: definition }
            })
            console.log(`Gergal was created Word:${word}, Definition:${definition}`); 
        } catch (err) {
            console.log(err); 
        }
    
        setWord(''); 
        setDefinition(''); 
    }

    return ( 
    <div className="addWordContainer">
        <h2>Add a Gergal</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="word" 
                placeholder="Word"
                value={word}
                required
                onChange={(e)=>{setWord(e.target.value)}}
            />
            <br/>
            <textarea 
                id="blogTextarea"
                type="textarea" 
                name="definition" 
                required
                placeholder="Write Your Definition Here"
                value={definition}
                onChange={(e)=>{setDefinition(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddGergal;