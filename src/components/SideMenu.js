import React from 'react';

class SideMenu extends React.Component {
    render() {
       return (
        <div className="sidemenu">
        {/* SIDE MENU TITLE */}
        <div className="sidemenu-title">
            <img src='../public\web_first_images_release.png'alt="SideMenuIcon" height='50' width='50' />
            <span id="userID" className="sidemenu-userID">&nbsp;Carlos Martinez&nbsp;&nbsp;</span>
        </div>
        {/* MENU CONTENT */}
        <div>
        <h2>SideMenu</h2>
        {/*BEGIN GROUP OF MODE/ACTION BUTTONS */}
        {/*Mode-based menu items are contextual; they provide
            easy access to most important functionality in current mode */}
        <a className="menu-item">
          <span className="fa fa-list-alt"></span>&nbsp;Chat</a>
        <a className="menu-item">
          <span className="fa fa-user-friends"></span>&nbsp;submit picks</a>
        <a id="allRoundsItem" className="menu-item">
          <span className="fa fa-history"></span>&nbsp;current week picks</a>
        <a id="logRoundItem" className="menu-item">
          <span className="fa fa-plus"></span>&nbsp;last week picks</a>
        <a className="menu-item" >
          <span className="fa fa-flag"></span>&nbsp;all time winners</a>
        <a className="menu-item">
          <span className="fa fa-plus"></span>&nbsp;Gametime weather</a>
        {/* The following menu items are present regardless of mode */}
        <a id="aboutBtn" className="menu-item">
          <span className="fa fa-info-circle"></span>&nbsp;About</a>
        <a id="logOutBtn" className="menu-item">
          <span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
        </div>
        </div>
       );
    }
}

export default SideMenu;
