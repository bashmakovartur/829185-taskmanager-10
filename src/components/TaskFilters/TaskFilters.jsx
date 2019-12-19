import React, { Component } from "react";

class TaskFilters extends Component {
    render() {
        return (
            <div className="board__filter-list">
                <a href="#" className="board__filter">SORT BY DEFAULT</a>
                <a href="#" className="board__filter">SORT BY DATE up</a>
                <a href="#" className="board__filter">SORT BY DATE down</a>
            </div>
        );
    }
}

export default TaskFilters;
