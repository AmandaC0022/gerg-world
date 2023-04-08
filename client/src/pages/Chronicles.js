import image from "../images/dear dairy.png"; 
import AddBlog from "../components/AddBlog";
import Accordion from 'react-bootstrap/Accordion';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../utils/queries';

const Chronicles = () => {
    const { loading, data } = useQuery(GET_BLOGS);
    const blogs = data?.getBlogs || []; 
    console.log(blogs); 

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
                {blogs.map((blog) => {
                    return (
                    <div>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                    )
                })}
                {/* {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Accordion className="blogPostContainer" defaultActiveKey="0">
                    {blogs.map((blog) => {
                        <Accordion.Item eventKey="0" className="blogPost">
                            <Accordion.Header className="blogPostHeader">
                                <h3>{blog.title}</h3>
                                <h4>11/12/22</h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>{blog.body}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    })}
                    </Accordion>
                )} */}
            </div>
            <AddBlog/>
        </div>
     );
}
 
export default Chronicles;