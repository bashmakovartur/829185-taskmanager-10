import React, { Component } from "react";
import Controls from "../components/Controls/Controls.jsx";
import Search from "../components/Search/Search.jsx";
import Filters from "../components/Filters/Filters.jsx";
import TasksContainer from "./TasksContainer/TasksContainer.jsx";
import '../../static/css/style.css';
import '../../static/css/normalize.css';
import mockTasks from './mocks.js';

const maxTasks = mockTasks;
const minTasks = maxTasks.slice(0,8);

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: minTasks,
            searchField: '',
            filter: '',
            count: ''
        };
    }

    updateTasks = (e) => {
        this.setState({ tasks: maxTasks });
        e.target.classList.add('visually-hidden');
    };

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const filteredTasks = this.state.tasks.filter(tasks => {
            const regExp = this.state.searchField.toString().toLowerCase().trim();
            return  tasks.hashTags.join('').toLowerCase().match(regExp);
        });

        return (
            <div>
                <Controls />
                <Search searchChange={this.onSearchChange}/>
                <Filters arr={filteredTasks}/>
                <TasksContainer updateTasks={this.updateTasks} arr={filteredTasks}/>
            </div>
        );
    }
}

export default App;
