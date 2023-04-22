import image from "../images/dear dairy.png"; 
import AddBlog from "../components/AddBlog";
import Accordion from 'react-bootstrap/Accordion';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../utils/queries';
import { Link } from "react-router-dom";

const Chronicles = () => {
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
        <div>
            <div className="pageHero">
                <img src={image} alt="Dear Diary"/> 
                <div>
                    <h2>The "Gerg" Chronicles</h2>
                    <p>Ever wondered what all was going on in that silly mind of Gerg? Now is your chance. Below is a blog, fully written by Gerg himself.</p>
                </div>
            </div>
            <div>
                {/* {loading ? (
                    <div>Loading...</div>
                ) : ( */}
                    {blogs.map((blog) => {
                        return (
                            <Accordion className="blogPostContainer" defaultActiveKey="1">
                                <Accordion.Item eventKey="0" className="blogPost">
                                <div className="iconContainer">
                                    <Link to={`/chronicles/${blog._id}`}>
                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>
                                    </Link>
                                </div>
                                    <Accordion.Header>
                                        <div>
                                            <h3>{blog.title}</h3>
                                            <p>{blog.createdAt}</p> 
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>{blog.body}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                {/* )} */}
            </div>
            <AddBlog/>
        </div>
     );
}
 
export default Chronicles;