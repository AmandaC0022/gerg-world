import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FIND_BLOG } from '../utils/queries';

const Chronicle = () => {
    const { blogId } = useParams(); 
    console.log(blogId); 

    const { loading, data, error } = useQuery(FIND_BLOG, {
        variables: { 
            id: blogId,  
        } 
    }); 

    const blog = data.findBlog; 

    if (loading) {
        return <div>Loading...</div>; 
    }
    if (error) {
        return <div>{error.message}</div>
    }

    return ( 
        <div className="blogPostContainer">
            <div className="blogPost">
                <div className="iconContainer">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                </div>
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.createdAt}</p> 
                </div>
                <p>{blog.body}</p>
            </div>           
        </div>
     );
}
 
export default Chronicle;
