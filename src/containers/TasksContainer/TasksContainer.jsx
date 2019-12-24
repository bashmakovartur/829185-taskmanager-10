import React, { Component } from 'react';
import TaskSort from '../../components/TaskSort/TaskSort.jsx';
import TaskWrapper from '../../components/TaskWrapper/TaskWrapper.jsx';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton.jsx';

class TasksContainer extends Component {

    render() {
        return (
            <section className='board container'>
                <TaskSort sortTasks={this.props.sortTasks}/>
                <TaskWrapper arr={this.props.arr}/>
                <LoadMoreButton updateTasks={this.props.updateTasks} />
            </section>
        );
    }
}

export default TasksContainer;
