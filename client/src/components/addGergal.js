import { useState } from "react"; 
import { useMutation } from '@apollo/client';
// import { CREATE_BLOG } from '../utils/mutations';

const AddGergal = () => {
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
        <h2>Add a Gergal</h2>
        <form>
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                // value={title}
                required
                // onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <input 
                id="blogTextarea"
                type="textarea" 
                name="body" 
                required
                placeholder="Write Your Blog Here"
                // value={body}
                // onChange={(e)=>{setBody(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddGergal;