import React, { Component } from "react";
import Task from "../Task/Task.jsx";

class TaskWrapper extends Component {
    render() {
        return (
            <div className="board__tasks">
                <Task
                    color={'black'}
                    isFavorite={true}
                    isArchive={false}
                />
            </div>
        );
    }
}

export default TaskWrapper;
