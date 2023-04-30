import image from "../images/blah blah blah.png"; 
import cloud from "../images/cloud.png"; 
import AddGergal from '../components/addGergal'; 

const Gergals = () => {
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
                <div className="cloud-container">
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"ism</h3>
                </div>
                <div className="cloud-container">
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"alicious</h3>
                </div>
                <div className="cloud-container">
                    <img className="cloud" src={cloud} alt="thought cloud"/>
                    <h3 className="cloud-overlay">"Gerg"atude</h3>
                </div>
            </div>
            <AddGergal/>
        </div>
     );
}
 
export default Gergals;
