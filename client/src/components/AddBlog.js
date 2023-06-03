import { useState } from "react"; 
import { useMutation } from '@apollo/client';
import { CREATE_BLOG } from '../utils/mutations';

const AddBlog = () => {
    //sets values to empty and allows them to be changed.
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 

    //fetches the mutation to create a blog
    const [createBlog] = useMutation(CREATE_BLOG); 

    const handleSubmit = async (event) => {
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
        <h2>Add a Blog</h2>
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
            <textarea 
                type="textarea" 
                wrap="hard"
                cols="90"
                rows="5"
                name="body" 
                required
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