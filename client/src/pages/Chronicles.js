import image from "../images/dear dairy.png"; 
import AddBlog from "../components/AddBlog";
import Accordion from 'react-bootstrap/Accordion';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../utils/queries';

const Chronicles = () => {
    const { loading, data } = useQuery(GET_BLOGS); 
    const blogs = data.getBlogs;  

    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Dear Diary"/> 
                <div>
                    <h2>The "Gerg" Chronicles</h2>
                    <p>Ever wondered what all was going on in that silly mind of Gerg? Now is your chance. Below is a blog, fully written by Gerg himself.</p>
                </div>
            </div>

            <Accordion className="blogPostContainer" defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="blogPost">
                    <Accordion.Header className="blogPostHeader">
                        <h3>Blog Title</h3>
                        <h4>11/12/22</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        Nap all day put toy mouse in food bowl run out of litter box at full speed , or find empty spot in cupboard and sleep all day for trip on catnip or claws in the eye of the beholder, for cattt catt cattty cat being a cat, reaches under door into adjacent room. Bury the poop bury it deep meow but poop on couch need to chase tail furrier and even more furrier hairball. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap haha you hold me hooman I scratch yet get my claw stuck in the dog’s ear for decide to want nothing to do with my owner today lick butt and make a weird face and fat baby cat best buddy little guy. Nap all day put toy mouse in food bowl run out of litter box at full speed , or find empty spot in cupboard and sleep all day for trip on catnip or claws in the eye of the beholder, for cattt catt cattty cat being a cat, reaches under door into adjacent room.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <AddBlog/>
        </div>
     );
}
 
export default Chronicles;