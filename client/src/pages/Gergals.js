import image from "../images/blah blah blah.png"; 
import cloud from "../images/cloud.png"; 
import AddGergal from '../components/addGergal'; 
import { useQuery } from '@apollo/client';
import { useState } from 'react'; 
import { FIND_GERGALS } from '../utils/queries';
import GergalPopUp from "../components/GergalPopUp";

const Gergals = () => {

    const { data } = useQuery(FIND_GERGALS); 
    const allGergals = data?.findGergals || []; 
    console.log(allGergals); 

    const [wordId, setWordId ] = useState(''); 
    const [show, setShow] = useState(false);

    const handleClick = (event) => {
        setWordId(event.target.getAttribute('id'));  
        setShow(true); 
    }

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
            <GergalPopUp passWordId={wordId} setShow={true}/>
            <AddGergal/>
        </div>
     );
}
 
export default Gergals;
