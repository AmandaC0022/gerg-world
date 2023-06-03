import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from "react"; 
import { FIND_BLOG } from '../utils/queries';
import { DELETE_BLOG, UPDATE_BLOG } from '../utils/mutations'; 
import Modal from 'react-bootstrap/Modal'; 

const EditBlog = () => {
    const { blogId } = useParams(); 

    const { loading, data, error } = useQuery(FIND_BLOG, {
        variables: { 
            id: blogId,  
        }
    }); 

    const [title, setTitle] = useState('');  
    const [body, setBody] = useState(''); 

    //handles Error Message
    const [showElement, setShowElement] = useState(false); 

    // Handle Updating the Blog 
    const [updateBlog] = useMutation(UPDATE_BLOG); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log(blogId); 
        if (title === '') {
            handleTitleError(); 
        }
        if (body === '') {
            handleBodyError();  
        }
        try {
            await updateBlog({
                variables: { body: body, title: title, id:blogId }
            })
            console.log(`Blog ${blogId} has been updated. Title: ${title}, Body:${body}`); 
            window.location = "/chronicles"; 
        } catch (err) {
            console.log(err); }
      }; 

    //handles showing and hidding the PopUp 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    //Handling Deleting the Blog 
    const [deleteBlog] = useMutation(DELETE_BLOG); 
    
    //fires if there is there no change in the Title input
    const handleTitleError = () => { 
        setShowElement(true); 
        throw Error('Title was not changed. Please change before submitting the form.'); 
    }; 
    const handleBodyError = () => { 
        setShowElement(true); 
        throw Error('Body was not changed. Please change before submitting the form.'); 
    };
    
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

    if (error) {
        return <div>{Error}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return ( 
        <div className="addBlogContainer">
            <div>
                <div className="iconContainer">
                <span className="material-symbols-outlined deleteIcon" onClick={handleShow}>
                    delete
                </span>
            </div>
            <h2>Edit Your Blog</h2>
            <p>Please edit both Title and Body to correctly save data.</p>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                // placeholder={data.findBlog.title}
                // ref={data.findBlog.title} 
                defaultValue={data.findBlog.title}
                required
                onChange={e => setTitle(e.target.value)}
            />
            <br/>
            <textarea 
                type="textarea" 
                name="body" 
                wrap="hard"
                cols="90"
                rows="3"
                required
                // placeholder={data.findBlog.body} 
                defaultValue={data.findBlog.body}
                onChange={e => setBody(e.target.value)}
            />
            <br/>
            {showElement ? (
                <p className="error">Please edit the Title and the Body to save.</p>
            ) : ''}
            <button className="customButton" type="submit">Done!</button>
        </form>  
        <Modal show={show} onHide={handleShow} centered size="lg">
                <Modal.Dialog className="deleteContainer">
                    <Modal.Header>
                        <h3>Are You Sure?</h3>
                    </Modal.Header>
                    <Modal.Footer>
                        <button className="customButton" onClick={handleDelete}>
                            Yes
                        </button>
                        <button className="customButton" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>   
        </div>      
    </div>
    );
}
 
export default EditBlog;
