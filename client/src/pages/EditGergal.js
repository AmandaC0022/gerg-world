import { useState } from "react"; 
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_GERGAL } from '../utils/mutations';
import { useParams } from 'react-router-dom';
import { FIND_GERGAL } from '../utils/queries'; 

const EditGergal = () => {
    const { gergalId } = useParams(); 
    const [word, setWord] = useState(''); 
    const [definition, setDefinition] = useState(''); 

    // const [updateGergal] = useMutation(UPDATE_GERGAL); 

    const { data, error } = useQuery(FIND_GERGAL, {
        variables: { 
            id: gergalId,  
        }
    }); 

    if (data) {
        
    }

    // const gergal = data.findGergal; 
    // setWord(gergal.word); 
    // setDefinition(gergal.definition); 
    // console.log(gergal); 

    // const onPageLoad = async (event) => {
    //     // event.preventDefault(); 
    //     await refetch(); 
    //     setWord(data.findGergal.word); 
    //     setDefinition(data.findGergal.definition); 
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault(); 
    //     try {
    //         await updateGergal({
    //             variables: { word: word, definition: definition }
    //         })
    //         console.log(`Gergal was updated Word:${word}, Definition:${definition}`); 
    //     } catch (err) {
    //         console.log(err); 
    //     }
    // }

    return ( 
    <div className="addWordContainer">
        <div className="iconContainer">
                <span className="material-symbols-outlined deleteIcon">
                    delete
                </span>
        </div>
        <h2>Edit a Gergal</h2>
        <form>
            <input 
                type="text" 
                name="title" 
                placeholder={data.findGergal.word}
                defaultValue={data.findGergal.word}
                required
                onChange={(e)=>{setWord(e.target.value)}}
            />
            <br/>
            <textarea 
                id="blogTextarea"
                type="textarea" 
                name="definition" 
                required
                placeholder={data.findGergal.definition}
                defaultValue={data.findGergal.definition}
                onChange={(e)=>{setDefinition(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default EditGergal;