import React, { Component } from "react";
import { Spinner } from "./index";

import "../css/LoadButton.css";

class LoadButton extends Component {
    render() {
        return (
            <>
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <div
                        className="loadButton"
                        onClick={this.props.onLoadButtonClick}
                    >
                        <h3 className="loadButton--text">VOIR PLUS</h3>
                    </div>
                )}
            </>
        );
    }
}

export { LoadButton };
