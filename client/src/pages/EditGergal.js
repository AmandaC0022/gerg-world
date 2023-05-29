import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from "react"; 
import { FIND_GERGAL } from '../utils/queries';
import { DELETE_GERGAL, UPDATE_GERGAL } from '../utils/mutations'; 
import Modal from 'react-bootstrap/Modal'; 

const EditGergal = () => {
    const { gergalId } = useParams(); 

    const { loading, data, error } = useQuery(FIND_GERGAL, {
        variables: { 
            id: gergalId,  
        }
    }); 

    const [word, setWord] = useState('');  
    const [definition, setDefinition] = useState(''); 

    // Handle Updating the Blog 
    const [updateGergal] = useMutation(UPDATE_GERGAL); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log(gergalId); 
        if (word === '') {
            handleWordError(); 
        }
        if (definition === '') {
            handleDefinitionError();  
        }
        try {
            await updateGergal({
                variables: { word: word, definition: definition, id:gergalId }
            })
            console.log(`Gergal ${gergalId} has been updated. Word: ${word}, Definition:${definition}`); 
            window.location = "/gergals"; 
        } catch (err) {
            console.log(err); }
      }; 

    //handles showing and hidding the PopUp 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    //Handling Deleting the Blog 
    const [deleteGergal] = useMutation(DELETE_GERGAL); 
    
    //fires if there is there no change in the Title input
    const handleWordError = async () => { 
        throw Error('Word was not changed. Please change before submitting the form.'); 
    }; 
    const handleDefinitionError = async () => { 
        throw Error('Definition was not changed. Please change before submitting the form.'); 
    };
    
    const handleDelete = async (event) => {
        event.preventDefault(); 
        try {
            await deleteGergal({
                variables: { id: gergalId }
            })
            console.log(`Gergal has been deleted.`)
            window.location="/gergals"
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
            <h2>Edit Your Gergal</h2>
            <p>Please edit both Word and Definition to correctly save data.</p>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="word" 
                // placeholder={data.findBlog.title}
                // ref={data.findBlog.title} 
                defaultValue={data.findGergal.word}
                required
                onChange={e => setWord(e.target.value)}
            />
            <br/>
            <input 
                id="blogTextarea"
                type="textarea" 
                name="definition" 
                required
                // placeholder={data.findBlog.body} 
                defaultValue={data.findGergal.definition}
                onChange={e => setDefinition(e.target.value)}
            />
            <br/>
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
 
export default EditGergal;
