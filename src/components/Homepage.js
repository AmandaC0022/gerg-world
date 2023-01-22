import image from "../images/hello sunshine.png"; 
import GergaloftheDay from "./GergalOfTheDay";

const Homepage = () => {
    return ( 
        <div>
            <div className="homepage-hero">
                <img src={image} alt="Hello!"/> 
                <div>
                    <h2>Welcome to Gerg's World!</h2>
                    <p>Just a simple website build for the best Dad on the planet by his loving daughter.</p>
                    <p>Explore the crazy world that is Gerg!</p>
                </div>
            </div>
            <GergaloftheDay/>
        </div>
     );
}
 
export default Homepage;
