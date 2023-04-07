import { useState } from "react"; 
import { useMutation } from '@apollo/client';
import { CREATE_BLOG } from '../utils/mutations';

const AddBlog = () => {
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 

    const [createBlog] = useMutation(CREATE_BLOG); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            await createBlog({
                variables: { title: title, body: body }
            })
            console.log(`Blog was created Title:${title}, Body:${body}`); 
        } catch (err) {
            console.log(err); 
        }
    
        setTitle(''); 
        setBody(''); 
    }

    return ( 
    <div className="addBlogContainer">
        <h2>Add a Post</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <input 
                id="blogTextarea"
                type="textarea" 
                name="body" 
                placeholder="Write Your Blog Here"
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddBlog;