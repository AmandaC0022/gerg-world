import image from "../images/baking.png"; 
// import AddBlog from "../components/AddBlog";
import Accordion from 'react-bootstrap/Accordion';
import { useQuery } from '@apollo/client';
// import { GET_BLOGS } from '../utils/queries';
import { Link } from "react-router-dom";

const Recipes = () => {
    // const { loading, data } = useQuery(GET_BLOGS);
    // const blogs = data?.getBlogs || []; 
    // console.log(blogs); 

    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Cooking with Gerg"/> 
                <div>
                    <h2>"Gerg"atizers</h2>
                    <p>Chef Gerg is always making up some delicious meals for his kids when his wife leaves on trips. Below are some of his favorite recipes. Dads everywhere feel free to cook these when your beloved wife leaves. These are sure to liven up any occasion. </p>
                </div>
            </div>
            {/* {blogs.map((blog) => {
                return (
                    <Accordion className="blogPostContainer" defaultActiveKey="1" key={blog._id}>
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
            })} */}
        </div>
     );
}
 
export default Recipes;