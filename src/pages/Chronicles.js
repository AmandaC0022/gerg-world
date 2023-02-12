import image from "../images/dear dairy.png"; 
import AddBlog from "../components/AddBlog";

const Chronicles = () => {
    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Dear Diary"/> 
                <div>
                    <h2>The "Gerg" Chronicles</h2>
                    <p>Ever wondered what all was going on in that silly mind of Gerg? Now is your chance. Below is a blog, fully written by Gerg himself.</p>
                </div>
            </div>
            <div className="blogPostContainer">
                <div className="blogPost">
                    <div className="blogPostHeader">
                        <h3>Blog Title</h3>
                        <h4>Date</h4>
                    </div>
                    <hr/>
                    <p>Nap all day put toy mouse in food bowl run out of litter box at full speed , or find empty spot in cupboard and sleep all day for trip on catnip or claws in the eye of the beholder, for cattt catt cattty cat being a cat, reaches under door into adjacent room. Bury the poop bury it deep meow but poop on couch need to chase tail furrier and even more furrier hairball. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap haha you hold me hooman I scratch yet get my claw stuck in the dog’s ear for decide to want nothing to do with my owner today lick butt and make a weird face and fat baby cat best buddy little guy. Nap all day put toy mouse in food bowl run out of litter box at full speed , or find empty spot in cupboard and sleep all day for trip on catnip or claws in the eye of the beholder, for cattt catt cattty cat being a cat, reaches under door into adjacent room.</p>
                </div>
            </div>
            <AddBlog/>
        </div>
     );
}
 
export default Chronicles;