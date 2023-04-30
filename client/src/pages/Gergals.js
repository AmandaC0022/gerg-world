import image from "../images/blah blah blah.png"; 
import cloud from "../images/cloud.png"; 
import AddGergal from '../components/addGergal'; 
import Modal from 'react-bootstrap/Modal'; 
import { useState } from 'react'; 
import { Link } from "react-router-dom";

const Gergals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <Modal show={show} onHide={handleShow} centered size="lg">
                <Modal.Dialog className="popUpContainer">
                    <Modal.Header>
                        <h3>"Gerg"alo</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Faster than a speeding pushmower, more powerful than 10 year old Chevy equipment, able to leap tall grass in a single bound. It’s a bird! It’s a plane! NO! It’s a “GERG”ALO!!!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/gergals/123" >
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
            <div className="clouds">
                <div className="cloud-container" onClick={handleShow}>
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"ism</h3>
                </div>
                <div className="cloud-container" onClick={handleShow}>
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"alicious</h3>
                </div>
                <div className="cloud-container" onClick={handleShow}>
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"atude</h3>
                </div>
            </div>
            <AddGergal/>
        </div>
     );
}
 
export default Gergals;
