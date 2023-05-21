import image from "../images/blah blah blah.png"; 
import cloud from "../images/cloud.png"; 
import AddGergal from '../components/addGergal'; 
import { useQuery } from '@apollo/client';
import { useState } from 'react'; 
import { FIND_GERGALS } from '../utils/queries';
import { FIND_GERGAL } from '../utils/queries';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'; 


const Gergals = () => {

    //find all gergals
    const { data: gergals } = useQuery(FIND_GERGALS); 
    const allGergals = gergals?.findGergals || []; 
    console.log(allGergals); 

    //saves each Gergal ID into a variable to use 
    const [wordId, setWordId ] = useState(''); 

    //saves each value into a variable to use 
    const [word, setWord] = useState(''); 
    const [definition, setDefinition] = useState(''); 

    //handles showing and hidding the PopUp 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    //Click Event for each Cloud
    const handleClick = async (event) => {
        event.preventDefault(); 
        //grabs the ID from each cloud and saves it 
        await setWordId(event.target.getAttribute('id'));
        console.log(event.target.getAttribute('id')); 
        //shows the PopUp
        handleShow(); 
        //fetches the Gergal's data by ID 
        const res = await refetch();  
        //saves it within variables to be used 
        setWord(res.data.findGergal.word); 
        setDefinition(res.data.findGergal.definition); 
        console.log(word, definition); 
    }

    // find 1 gergal by ID
    const { data: oneGergal, refetch } = useQuery(FIND_GERGAL, {
        enabled: false, 
        variables: { 
            id: wordId,  
        }
    }); 

    // console.log(oneGergal.findGergal.word); 

    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Blah Blah Blah!"/> 
                <div>
                    <h2>"GERG"ALS</h2>
                    <p>Gerg has quite a way with words. Below are a few words that he has created.</p>
                    <p>Click on the clouds to learn the meaning.</p>
                </div>
            </div>
            <div className="clouds">
                {allGergals.map((gergal) => {
                    return (
                        <div className="cloud-container" onClick={handleClick} id={gergal._id}>
                            <img className="cloud" src={cloud} alt="thought cloud" id={gergal._id}/>
                            <h3 className="cloud-overlay" id={gergal._id}>{gergal.word}</h3>
                        </div>
                    )
                })}
            </div>
            <Modal show={show} onHide={handleShow} centered size="lg">
                <Modal.Dialog className="popUpContainer">
                    <Modal.Header>
                        <h3>{word}</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{definition}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/gergals/123">
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                        <button className="customButton" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
            <AddGergal/>
        </div>
     );
}
 
export default Gergals;
