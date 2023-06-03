import cloud from "../images/cloud.png"; 
import { useQuery } from '@apollo/client';
import { FIND_GERGALS } from '../utils/queries'; 

const GergaloftheDay = () => {
    //Query all of the gergals
    const { loading, data, error } = useQuery(FIND_GERGALS); 
    //Grabs the index from the latest gergal
    const index = data.findGergals.length - 1; 
    const gergal = data.findGergals; 

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }
    
    return ( 
    <div className="GOTDcontainer">
        <h2>"Gerg"al of the Day</h2>
        <div className="cloud-container">
            <img className="cloud" src={cloud} alt="thought cloud"/> 
            <h3 className="cloud-overlay">{gergal[index].word}</h3>
        </div>
        <p>{gergal[index].definition}</p>
    </div>
     );
}
 
export default GergaloftheDay;