import React, {Component} from "react";

class TaskSort extends Component {
    render() {
        return (
            <div className="board__filter-list">
                <a href="#" onClick={this.props.sortTasks} data-type="default" className="board__filter">SORT BY
                    DEFAULT</a>
                <a href="#" onClick={this.props.sortTasks} data-type="date-up" className="board__filter">SORT BY DATE
                    up</a>
                <a href="#" onClick={this.props.sortTasks} data-type="date-down" className="board__filter">SORT BY DATE
                    down</a>
            </div>
        );
    }
}

export default TaskSort;
