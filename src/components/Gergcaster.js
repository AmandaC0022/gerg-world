import { useState, useEffect } from 'react'; 

const Gergcaster = () => {
    // const [date, setDate] = useState(); 
    // const [venue, setVenue] = useState(); 
    // const [homeTeam, sethomeTeam] = useState(); 
    // const [awayTeam, setawayTeam] = useState(); 
    // const [homeScore, sethomeScore] = useState(); 
    // const [awayScore, setawayScore] = useState(); 

    fetch('https://api.collegefootballdata.com/games?year=2022&seasonType=regular&team=Auburn', {
        method: 'GET', 
        mode: 'no-cors', 
        headers: {
            Authorization:'Bearer I5xXYkmuVikMDyST3O2KQpsMRt/RESQ2wje+KBYrySO/QLT3RtfaTHgixYEC/LdM', 
            accept: 'application/json',
        }, 
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data); 
    })
    .catch((err)=> {
        console.log(err.message); 
    }); 

    return ( 
        <div className="gergcaster-container">
            <h2>"Gerg"caster Highlights</h2>
            <table className="football-data">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>VENUE</th>
                        <th>HOME TEAM</th>
                        <th>AWAY TEAM</th>
                        <th>HOME SCORE</th>
                        <th>AWAY SCORE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10/30</td>
                        <td>Jordan-Hare Stadium</td>
                        <td>Auburn</td>
                        <td>Ole Miss</td>
                        <td>31</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Gergcaster;