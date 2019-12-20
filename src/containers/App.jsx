import React, { Component } from "react";
import Controls from "../components/Controls/Controls.jsx";
import Search from "../components/Search/Search.jsx";
import Filters from "../components/Filters/Filters.jsx";
import TasksContainer from "./TasksContainer/TasksContainer.jsx";
import '../../static/css/style.css';
import '../../static/css/normalize.css';
import mockTasks from './mocks.js';

class App extends Component {
    render() {
        console.log(mockTasks);

        return (
            <div>
                <Controls />
                <Search />
                <Filters arr={mockTasks}/>
                <TasksContainer arr={mockTasks}/>
            </div>
        );
    }
}

export default App;
