import image from "../images/real funny stuff.png"; 
import AddGergal from '../components/addGergal'; 
import { useQuery } from '@apollo/client';
import { useState } from 'react'; 
import { FIND_GERGISMS } from '../utils/queries';
import { Link } from "react-router-dom";

const Gergisms = () => {

    //find all gergisms
    const { data, loading } = useQuery(FIND_GERGISMS); 
    const allGergisms = data?.findGergisms || []; 
    // console.log(allGergals); 

     if (loading) {
        return <div>Loading...</div>
     }
    return ( 
        <div>
            <div className="pageHero">
                <img src={image} alt="Real funny stuff"/> 
                <div>
                    <h2>"GERG"ISMS</h2>
                    <p>Whether created by the amazing Gerg, himself, or someone else has said this about him. Gerg’s phrases and stories are always the best. </p>
                    <p>Below are some of these “Greg”isms.</p>
                </div>
            </div>
            <div className="gergisms">
                {allGergisms.map((gergism) => {
                    return (
                        <div className="gergism-container" id={gergism._id} key={gergism.id}>
                            <Link to={`/gergisms/${gergism.id}`}>
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                            <h4 className="">{gergism.phrase}</h4>
                        </div>
                    )
                })}
            </div>
            <AddGergal/>
        </div>
     );
}
 
export default Gergisms;
