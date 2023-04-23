import { Redirect, useParams } from 'react-router-dom';
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
    console.log(data); 
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 

    const handleSubmit = async (event) => {
        // // event.preventDefault(); 
        // try {
        //     await createBlog({
        //         variables: { title: title, body: body }
        //     })
        //     console.log(`Blog was created Title:${title}, Body:${body}`); 
        // } catch (err) {
        //     console.log(err); 
        // }
    
        // setTitle(''); 
        // setBody(''); 
    }

    if (loading) {
        return <div>Loading...</div>; 
    }
    if (error) {
        return <div>{error.message}</div>
    }

    return ( 
        <div className="addBlogContainer">
            <div className="blogPost">
            <h2>Edit Your Blog</h2>
                <div className="iconContainer">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                </div>
                <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder={data.findBlog.title}
                value={data.findBlog.title}
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
                value={data.findBlog.body}
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
