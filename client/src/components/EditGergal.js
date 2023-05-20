import { useState } from "react"; 
import { useMutation } from '@apollo/client';
// import { CREATE_BLOG } from '../utils/mutations';

const EditGergal = () => {
    // const [title, setTitle] = useState(''); 
    // const [body, setBody] = useState(''); 

    // const [createBlog] = useMutation(CREATE_BLOG); 

    // const handleSubmit = async (event) => {
    //     // event.preventDefault(); 
    //     try {
    //         await createBlog({
    //             variables: { title: title, body: body }
    //         })
    //         console.log(`Blog was created Title:${title}, Body:${body}`); 
    //     } catch (err) {
    //         console.log(err); 
    //     }
    
    //     setTitle(''); 
    //     setBody(''); 
    // }
    // onSubmit={handleSubmit}

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
                placeholder='"Gerg"alo'
                // value={title}
                required
                // onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <textarea 
                id="blogTextarea"
                type="textarea" 
                name="definition" 
                required
                placeholder="Faster than a speeding pushmower, more powerful than 10 year old Chevy equipment, able to leap tall grass in a single bound. It’s a bird! It’s a plane! NO! It’s a “GERG”ALO!!!"
                // value={body}
                // onChange={(e)=>{setBody(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default EditGergal;