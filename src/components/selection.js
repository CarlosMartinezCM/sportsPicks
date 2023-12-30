import React from 'react';
import jsonData from '../data/week17.json';  //Directly import the local JSON data file

class Selection extends React.Component {
  constructor(props) {
    super(props);
    //Create date object for today, taking time zone into consideration
    let today = new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000);
    this.state = {
      //sportsData: [],
      date: today.toISOString().substr(0, 10),
      player: "",
      pick: "selection",
      points: "",
      faIcon: "fa fa-save",
      btnLabel: "Submit Picks",
      selectedTeam: null,
      selectedGames: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    try {
      // For a local JSON file, you can directly import it to parse and display the info on the site.
      this.setState({
        matchups: jsonData.week,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  handleTeamSelect = (team) => {
    //add logic to handle the selection to only be the first time 
    //maybe try using the ID to make sure that the matchup has not been selected yet. 
    this.setState((prevState) => ({
      selectedGames: [...prevState.selectedGames, team],
    }));
  };

  handleGameCheckbox = (gameId) => {
    // const { selectedGames } = this.state;
    // const index = selectedGames.indexOf(gameId);

    // if (index === -1) {
    //   // Add the gameId to selectedGames
    //   this.setState({ selectedGames: [...selectedGames, gameId] });
    // } else {
    //   // Remove the gameId from selectedGames
    //   this.setState({ selectedGames: selectedGames.filter((id) => id !== gameId) });
    // }
  };

  //this will display the games selected
  handleSubmit = (event) => {
    event.preventDefault();
    // Access the selectedGames from the state and handle the submission logic
    alert(this.state.selectedGames);
    console.log('Selected Games:', this.state.selectedGames);
    // Add additional logic here to handle the submission, such as sending data to a server or updating parent component state.
  };

  render() {
    const { selectedGames } = this.state;
    return (
      <div className="padded-page">
        <center>
          <form className="padded-page" onSubmit={this.handleSubmit}>
            <center>
              <h1>Week 17 NFL Schedule</h1>
              <h2>Pick'Em</h2>
              <label>
                Date:
                <input name="date" className="form-control form-center"
                  type="date" value={this.state.date} onChange={this.handleChange} />
              </label>
              <p></p>
              <label>MatchUps:
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {jsonData.week[0].match.Game.map((game) => (
                    <li
                      key={game.id}
                      style={{
                        marginBottom: '10px',
                        borderBottom: '1px solid #ccc',
                        backgroundColor: selectedGames.includes(game.away) ||
                                         selectedGames.includes(game.home) ? '#e6f7ff' : 'inherit',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onClick={() => this.handleTeamSelect(game.away)}>
                      <div>
                        <p>
                          <strong>Game {game.id}:</strong>
                        </p>
                        <p>
                          <strong>Time:</strong> {game.time}
                        </p>
                        <label>
                        <input
                            type="radio"
                            name={`game_${game.id}`}
                            checked={selectedGames.includes(game.away)}
                            onChange={() => this.handleTeamSelect(game.away)}
                          />
                          <strong>{game.away}</strong>
                        </label>
                        <strong>   @   </strong>
                        <label>
                          <strong>{game.home}</strong>
                          <input
                            type="radio"
                            name={`game_${game.id}`}
                            checked={selectedGames.includes(game.home)}
                            onChange={() => this.handleTeamSelect(game.home)}
                          />
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </label>
              <p>Enter total combined points for the Monday night football game!</p>
              <label>Total Points:
                <textarea name="points" className="form-control"
                  placeholder="" value={this.state.points}
                  onChange={this.handleChange} />
              </label>
              <p></p>
              <button type="submit" style={{ width: "70%", fontSize: "36px" }}
                className="btn btn-primary btn-color-theme">
                <span className={this.state.faIcon} />&nbsp;{this.state.btnLabel}
              </button>
            </center>
          </form>
        </center>
      </div>
    );
  }
}

export default Selection;