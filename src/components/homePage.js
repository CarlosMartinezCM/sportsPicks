import React from 'react';
import jsonData from '../data/nflESPN.json';  //Directly import the local JSON data file

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sportsData: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        try {
            // For a local JSON file, you can directly import it to parse and display the info on the site.
            this.setState({
                sportsData: jsonData.sports,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        const { sportsData } = this.state;
        return (
            <div className="padded-page">
                <center>
                    <h1>Welcome to Pick'm!!</h1>
                    <p>This page will be the landing location after logging into the user account.</p>
                    <div className="card-container">
                        {sportsData.map((sport) => (
                            <div key={sport.id} className="sport-container">
                                {sport.leagues.map((league) => (
                                    <div key={league.id} className="league-container">
                                        <h3>{league.name}</h3>
                                        <div className="teams-container">
                                            {league.teams.map((team) => (
                                                <div key={team.team.id} className="team-container">
                                                    <h4>{team.team.name}</h4>
                                                    <a href={team.team.links[0].href} target="_blank" rel="noopener noreferrer">
                                                        <img src={team.team.logos[0].href} alt={team.team.logos[0].alt} height="40px" width="40px" />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <p style={{ fontStyle: "italic" }}>Version 1.0 Pick'm AppMode</p>
                </center>
            </div>
        );
    }
}

export default HomePage;
