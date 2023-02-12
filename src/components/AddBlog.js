import { useState } from "react"; 

const AddBlog = () => {
    const [blogInfo, setBlogInfo] = useState({
        title: "", 
        message: "", 
    }); 

    const handleChange = (event) => {
        setBlogInfo({ ...blogInfo, [event.target.name]: event.target.value })
    }; 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(blogInfo); 
        setBlogInfo({ title:"", message:"" }); 
    }; 

    return ( 
    <div className="addBlogContainer">
        <h2>Add a Post</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                value={blogInfo.title}
                onChange={handleChange}
            />
            <br/>
            <input 
                id="blogTextarea"
                type="textarea" 
                name="message" 
                placeholder="Write Your Blog Here"
                value={blogInfo.message}
                onChange={handleChange}
            />
            <br/>
            <button type="submit">Done!</button>
        </form>
    </div>
     );
}
 
export default AddBlog;