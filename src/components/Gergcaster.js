import { useState, useEffect } from 'react'; 

const Gergcaster = () => {
    // const [date, setDate] = useState(); 
    // const [venue, setVenue] = useState(); 
    // const [homeTeam, sethomeTeam] = useState(); 
    // const [awayTeam, setawayTeam] = useState(); 
    // const [homeScore, sethomeScore] = useState(); 
    // const [awayScore, setawayScore] = useState();  
    
    const getGameData = () => {
        let url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/4294/matches/previous/0'; 
        fetch(url, {
            method: 'GET', 
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com'
            }
        }).then(res => res.json())
        .then(res => console.log(res.events[0].awayTeam.name))
        .catch(err => {console.error(err)})
    }; 
    getGameData(); 

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