import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js";
import Selection from './selection.js';
import comments from './comments.js';
import current from './current.js';
import homePage from './homePage.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Pick'M";
modeTitle[AppMode.HOMEPAGE] = "Home Page";
modeTitle[AppMode.SELECTION] = "Picks Selection form";
modeTitle[AppMode.CURRENT] = "Current picks";
modeTitle[AppMode.COMMENTS] = "comments feed";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.HOMEPAGE] = homePage;
modeToPage[AppMode.SELECTION] = Selection;
modeToPage[AppMode.CURRENT] = current;
modeToPage[AppMode.COMMENTS] = comments;

class app extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: AppMode.HOMEPAGE,
      menuOpen: false,
      userID: ""};
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  //Methods to open, close, and toggle the items in SideMenu, Navbar, ModeBar, and floating button.
  openMenu = () => {
    this.setState({ menuOpen: true });
  }
  closeMenu = () => {
    this.setState({ menuOpen: false });
  }
  toggleMenuOpen = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  //method to set userID state variable
  setUserID = (ID) => {
    this.setState({ userID: ID });
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div>
        <NavBar
          tittle={modeTitle[this.state.mode]}
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen} />
        <SideMenu
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          userID={this.state.userID} 
          toggleMenuOpen={this.toggleMenuOpen} />
        <ModeBar
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen} />
        <FloatingButton
          mode={this.state.mode}
          menuOpen={this.state.menuOpen} />
        <ModePage
          menuOpen={this.state.menuOpen}
          changeMode={this.handleChangeMode}
          setUserID={this.setUserID} />
      </div >
    );
  }
}

export default app;
