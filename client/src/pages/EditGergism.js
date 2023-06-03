import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from "react"; 
import { FIND_GERGISM } from '../utils/queries';
import { DELETE_GERGISM, UPDATE_GERGISM } from '../utils/mutations'; 
import Modal from 'react-bootstrap/Modal'; 

const EditGergism = () => {
    const { gergismId } = useParams(); 

    const { loading, data, error } = useQuery(FIND_GERGISM, {
        variables: { 
            id: gergismId,  
        }
    }); 

    const [phrase, setPhrase] = useState('');  
    const [showElement, setShowElement] = useState(false);  

    // Handle Updating the Gergism 
    const [updateGergism] = useMutation(UPDATE_GERGISM); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log(gergismId); 
        if (phrase === '') {
            handlePhraseError(); 
        }
        try {
            await updateGergism({
                variables: { phrase: phrase, id:gergismId }
            })
            console.log(`Gergism ${gergismId} has been updated. Phrase: ${phrase}`); 
            window.location = "/gergisms"; 
        } catch (err) {
            console.log(err); }
      }; 

    //handles showing and hidding the PopUp 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    //Handling Deleting the Gergism 
    const [deleteGergism] = useMutation(DELETE_GERGISM); 
    
    //fires if there is there no change in the Phrase input
    const handlePhraseError = () => { 
        setShowElement(true); 
        throw Error('Phrase was not changed. Please change before submitting the form.'); 
    }; 

    const handleDelete = async (event) => {
        event.preventDefault(); 
        try {
            await deleteGergism({
                variables: { id: gergismId }
            })
            console.log(`Gergism has been deleted.`)
            window.location="/gergisms"
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
            <h2>Edit Your Gergism</h2>
            <form onSubmit={handleSubmit}>
            <br/>
            <textarea 
                wrap="hard"
                cols="90"
                rows="3"
                type="textarea" 
                name="phrase" 
                required
                // placeholder={data.findBlog.body} 
                defaultValue={data.findGergism.phrase}
                onChange={e => setPhrase(e.target.value)}
            />
            <br/>
            {showElement ? (
                <p className="error">Please edit the Phrase to save.</p>
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
 
export default EditGergism;
