import { GET_BLOGS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const GergChroniclesUpdate = () => {
    const { loading, data, error } = useQuery(GET_BLOGS); 

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    //Grabs the index from the latest gergal
    const index = data.getBlogs.length - 1; 
    const blog = {
        title: data.getBlogs[index].title,  
        body: data.getBlogs[index].body, 
        date: data.getBlogs[index].createdAt
    }; 

    console.log(blog); 

    return ( 
    <div className="GCUContainer">
        <h2>"GERG" CHRONICLES UPDATE</h2>
        <div className="GCUCard">
            <div className="GCUHeader">
                <h3>{blog.title}</h3>
                <h4>{blog.date}</h4>
            </div>
            <hr/>
            <p>{blog.body}</p>
        </div>
    </div>
     );
}
 
export default GergChroniclesUpdate;