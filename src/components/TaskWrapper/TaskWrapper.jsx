import React, { Component } from "react";
import Task from "../Task/Task.jsx";

class TaskWrapper extends Component {

    render() {
        return (
            <div className="board__tasks">
                {this.props.arr && this.props.arr.map((item, index) => {
                    return (<Task
                        key = {index}
                        color = {item.color}
                        titleText = {item.titleText}
                        dateValue = {item.dateValue}
                        hashTags = {item.hashTags}
                        isRepeating = {item.isRepeating}
                        isDeadline = {item.isDeadline}
                        isFavorite = {item.isFavorite}
                        isArchive = {item.isArchive}
                    />)
                })}
            </div>
        );
    }
}

export default TaskWrapper;
