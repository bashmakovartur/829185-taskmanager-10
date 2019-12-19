import React, { Component } from "react";
import TaskFilters from "../../components/TaskFilters/TaskFilters.jsx";
import TaskWrapper from "../../components/TaskWrapper/TaskWrapper.jsx";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";

class TasksContainer extends Component {
    render() {
        return (
            <section className="board container">
                <TaskFilters />
                <TaskWrapper />
                <LoadMoreButton />
            </section>
        );
    }
}

export default TasksContainer;
