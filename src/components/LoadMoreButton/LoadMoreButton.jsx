import React, { Component } from "react";

class LoadMoreButton extends Component {
    render() {
        return (
            <button
                className="load-more"
                type="button"
                onClick={this.props.updateTasks}
            >
                Show all
            </button>
        );
    }
}

export default LoadMoreButton;
