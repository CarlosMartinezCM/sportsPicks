import React from 'react';

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
        btnLabel: "Submit Picks"
      };
  }
  
  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = () => {
  //   try {
  //     // For a local JSON file, you can directly import it to parse and display the info on the site.
  //     this.setState({
  //       sportsData: jsonData,
  //     });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  render() {
    return (
      <div className="padded-page">
        <center>
          <form className="padded-page" onSubmit={this.handleSubmit}>
            <center>
            <h1>Make your PICKS!</h1>
              <label>
                Date:
                <input name="date" className="form-control form-center"
                  type="date" value={this.state.date} onChange={this.handleChange} />
              </label>
              <p></p>
              <label>
                <p>Team 1 VS Team 2</p>
              </label>
              <label>Pick:
                <select name="pick" value={this.state.pick}
                  className="form-control form-center" onChange={this.handleChange}>
                  <option value="leftPick">leftPick</option>
                  <option value="RightPick">rightPick</option>
                </select>
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