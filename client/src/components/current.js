import React from 'react';

class Current extends React.Component {
    render() {
        return (
            <div className="padded-page">
                <center>
                    <h1>Current Week</h1>
                    <h2>Page Is Under Construction for now</h2>
                    <p>This page will pull the current weeks picks and update them live.</p>
                    <img src="../../images/WMAPtimeline.jpg" alt="Picks oage img" height="200px"
                        width="200px" />
                    <p style={{ fontStyle: "italic" }}>Version 1.0 Pick'm AppMode</p>
                </center>
            </div>
        )
    }
}

export default Current;