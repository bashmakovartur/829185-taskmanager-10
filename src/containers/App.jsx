import React, { Component } from "react";
import Controls from "../components/Controls/Controls.jsx";
import Search from "../components/Search/Search.jsx";
import Filters from "../components/Filters/Filters.jsx";
import TasksContainer from "./TasksContainer/TasksContainer.jsx";
import '../../static/css/style.css';
import '../../static/css/normalize.css';
import mockTasks from './mocks.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: mockTasks,
            searchField: '',
            filter: ''
        };
    }

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
                <TasksContainer arr={filteredTasks}/>
            </div>
        );
    }
}

export default App;
