import React from 'react';
import jsonData from './nflESPN.json';  //Directly import the local JSON data file

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

                    <h3>NFL Football Teams</h3>
                    <ul>
                        {sportsData.map((sport) => (
                            <ul key={sport.id}>
                                <ul>
                                    {sport.leagues.map((league) => (
                                        <ul key={league.id}>
                                            {league.name}
                                            <ul>
                                                {league.teams.map((team) => (
                                                    <ul key={team.team.id}>
                                                        {team.team.name}
                                                        <a href={team.team.logos[0].href} target="_blank" rel="noopener noreferrer">
                                                            <img src={team.team.logos[0].href} alt={team.team.logos[0].alt} height="40px"
                                                                width="40px" />
                                                        </a>
                                                    </ul>
                                                ))}
                                            </ul>
                                        </ul>
                                    ))}
                                </ul>
                            </ul>
                        ))}
                    </ul>
                    <p style={{ fontStyle: "italic" }}>Version 1.0 Pick'm AppMode</p>
                </center>
            </div>
        );
    }
}

export default HomePage;
