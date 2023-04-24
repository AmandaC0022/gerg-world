import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from "react"; 
import { FIND_BLOG } from '../utils/queries';
import { DELETE_BLOG, UPDATE_BLOG } from '../utils/mutations'; 

const Chronicle = () => {
    const { blogId } = useParams(); 

    const { loading, data, error } = useQuery(FIND_BLOG, {
        variables: { 
            id: blogId,  
        } 
    }); 

    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 

    // Handle Updating the Blog 
    const [updateBlog] = useMutation(UPDATE_BLOG); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log(blogId); 
        try {
            await updateBlog({
                variables: { body: body, title: title, id:blogId }
            })
            console.log(`Blog ${blogId} has been updated.`); 
            window.location = "/chronicles"; 
        } catch (err) {
            console.log(err); 
        }
      }; 

    //Handling Deleting the Blog 
    const [deleteBlog] = useMutation(DELETE_BLOG); 

    const handleDelete = async (event) => {
        event.preventDefault(); 
        try {
            await deleteBlog({
                variables: { id: blogId }
            })
            console.log(`Blog has been deleted.`)
            window.location="/chronicles"
        } catch (err) {
            console.log(err); 
        }
    }; 

    if (loading) {
        return <div>Loading...</div>; 
    }
    if (error) {
        return <div>{error.message}</div>
    }

    return ( 
        <div className="addBlogContainer">
            <div>
            <div className="iconContainer">
                <span className="material-symbols-outlined deleteIcon" onClick={handleDelete}>
                    delete
                </span>
            </div>
            <h2>Edit Your Blog</h2>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder={data.findBlog.title}
                value={title}
                required
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <input 
                id="blogTextarea"
                type="textarea" 
                name="body" 
                required
                placeholder={data.findBlog.body}
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
            />
            <br/>
            <button className="customButton" type="submit">Done!</button>
        </form>
            </div>           
        </div>
     );
}
 
export default Chronicle;
