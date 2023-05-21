import { useQuery } from '@apollo/client';
import { FIND_GERGAL } from '../utils/queries';
import { useState } from 'react'; 
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'; 

const GergalPopUp = ({passWordId, setShow}) => {

    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const { data } = useQuery(FIND_GERGAL, {
        enabled: false, 
        variables: { 
            id: passWordId,  
        }
    }); 

    console.log(data); 

    return ( 
        <div>
            <Modal show={show} onHide={handleShow} centered size="lg">
                <Modal.Dialog className="popUpContainer">
                    <Modal.Header>
                        <h3>"Gerg"alo</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Faster than a speeding pushmower, more powerful than 10 year old Chevy equipment, able to leap tall grass in a single bound. It’s a bird! It’s a plane! NO! It’s a “GERG”ALO!!!</p>
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
            {passWordId}
        </div>
     );
}
 
export default GergalPopUp;
