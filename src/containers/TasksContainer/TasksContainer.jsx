import React, { Component } from "react";
import TaskFilters from "../../components/TaskFilters/TaskFilters.jsx";
import TaskWrapper from "../../components/TaskWrapper/TaskWrapper.jsx";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";

class TasksContainer extends Component {

    render() {
        return (
            <section className="board container">
                <TaskFilters />
                <TaskWrapper arr={this.props.arr}/>
                <LoadMoreButton updateTasks={this.props.updateTasks} />
            </section>
        );
    }
}

export default TasksContainer;
