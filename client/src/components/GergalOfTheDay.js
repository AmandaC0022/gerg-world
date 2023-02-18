import cloud from "../images/cloud.png"; 

const GergaloftheDay = () => {
    return ( 
    <div className="GOTDcontainer">
        <h2>"Gerg"al of the Day</h2>
        <div className="cloud-container">
            <img className="cloud" src={cloud} alt="thought cloud"/> 
            <h3 className="cloud-overlay">"Gerg"itude</h3>
        </div>
        <p>Having a general positive attitude, unless you are heading to your mother's house, then it is pure rage.</p>
    </div>
     );
}
 
export default GergaloftheDay;