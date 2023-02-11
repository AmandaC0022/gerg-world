import image from "../images/dear dairy.png"; 

const Chronicles = () => {
    return ( 
        <div className="pageHero">
            <img src={image} alt="Dear Diary"/> 
            <div>
                <h2>The "Gerg" Chronicles</h2>
                <p>Ever wondered what all was going on in that silly mind of Gerg? Now is your chance. Below is a blog, fully written by Gerg himself.</p>
            </div>
        </div>
     );
}
 
export default Chronicles;