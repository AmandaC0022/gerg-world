import { useState } from "react"; 
import { useMutation } from '@apollo/client';
import { CREATE_GERGISM } from '../utils/mutations';

const AddGergism = () => {
    const [phrase, setPhrase] = useState(''); 

    const [createGergism] = useMutation(CREATE_GERGISM); 

    const handleSubmit = async (event) => {
        // event.preventDefault(); 
        try {
            await createGergism({
                variables: { phrase: phrase }
            })
            console.log(`Gergism was created Phrase:${phrase}`); 
        } catch (err) {
            console.log(err); 
        }
    
        setPhrase(''); 
    }

    return ( 
    <div className="addGergismContainer">
        <h2>Add a Gergism</h2>
        <form onSubmit={handleSubmit}>
            <textarea 
                type="textarea" 
                wrap="hard"
                cols="90"
                rows="3"
                name="phrase" 
                required
                placeholder="Write Your Phrase Here"
                value={phrase}
                onChange={(e)=>{setPhrase(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddGergism;