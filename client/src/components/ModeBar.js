import React from 'react';
import AppMode from '../AppMode.js';

class ModeBar extends React.Component {
    render() {
      return(
        <div className={"modebar" + (this.props.mode === AppMode.LOGIN ? 
          " invisible" : (this.props.menuOpen ? " ignore-click visible" : " visible"))}>
        <a className={(this.props.mode === AppMode.HOMEPAGE ? " item-selected" : null)}
            onClick={()=>this.props.changeMode(AppMode.HOMEPAGE)}>
          <span className="modebaricon fa fa-home"></span>
          <span className="modebar-text">HOMEPAGE</span>
        </a>
        <a className={(this.props.mode === AppMode.SELECTION ? " item-selected" : null)}
           onClick={()=>this.props.changeMode(AppMode.SELECTION)}>
          <span className="modebar-icon fa fa-th-list"></span>
          <span className="modebar-text">Pick'Em</span>
        </a>
        <a className={(this.props.mode === AppMode.CURRENT ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(AppMode.CURRENT)}>
          <span className="modebar-icon fa fa-list"></span>
          <span className="modebar-text">CURRENT</span>
        </a> 
        <a className={(this.props.mode === AppMode.COMMENTS ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(AppMode.COMMENTS)}>
          <span className="modebar-icon  fa fa-history"></span>
          <span className="modebar-text">Past weeks</span>
        </a> 
        </div>
      );
    }
}

export default ModeBar;


