import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_BLOG } from '../utils/queries';

const Chronicle = () => {
    const { loading, data } = useQuery(GET_BLOGS);
    const blogs = data?.getBlogs || []; 
    console.log(blogs); 

// const [ deleteBlog, { error }] = useMutation(DELETE_BLOG)

// const handleDeleteBlog = async (blog) => {
//     try {
//         const { data } = await deleteBlog({
//             variables: { blog }, 
//         })
//     } catch (e) {
//         console.log(e); 
//     }
// }
// onClick={()=> handleDeleteBlog(blog)}
{/* <span className="material-symbols-outlined deleteIcon">
                                        delete
                                    </span> */}


    return ( 
        <div className="blogPostContainer" >           
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
     );
}
 
export default Chronicle;
