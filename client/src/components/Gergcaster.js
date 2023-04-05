import { useState, useEffect } from 'react';

const Gergcaster = () => {
    const [games, setGames] = useState([]); 
    // const [date, setDates] = useState([]); 
    const url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/team/4294/matches/previous/0'; 
    
    function loadGameData() {
        fetch(url, {
            method: 'GET', 
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com'
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res.events);
            setGames(res.events); 
        })
        .catch(err => {console.error(err)}); 
    }

    useEffect(() => {loadGameData()}, []); 
    
    return ( 
        <div className="gergcaster-container">
            <h2>"Gerg"caster Highlights</h2>
            <table className="football-data">
                <thead>
                    <tr>
                        <th>HOME TEAM</th>
                        <th>AWAY TEAM</th>
                        <th>HOME SCORE</th>
                        <th>AWAY SCORE</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => {
                        return (
                            <tr key={game.customId}>
                                <td>{game.homeTeam.name}</td>
                                <td>{game.awayTeam.name}</td>
                                <td>{game.homeScore.display}</td>
                                <td>{game.awayScore.display}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default Gergcaster;