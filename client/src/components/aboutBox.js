import React from 'react';

class AboutBox extends React.Component {

    render() {
        return (
            <div className="modal" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title">Pick'm App</p>
                        <button id="modalClose" className="close"
                            onClick={this.props.hideAbout}>
                            &times;</button>
                    </div>
                    <div className="modal-body">
                        <center>
                            <h1 >Pick'm</h1>
                            <h2>This app will allow users to create an account for a pick'm sports game.</h2>
                            <img src="https://canestrinilex.com/assets/Uploads/blog-pics/f613404b87/Topsecretsidebar__ScaleWidthWzcwMF0.jpg"
                                height="200" width="200" />
                            <p style={{ fontStyle: "italic" }}>Version 1.1</p>
                        </center>
                        <div className="modal-footer">
                            <button className="btn btn-secondary"
                                onClick={this.props.hideAbout}>
                                OK</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutBox;