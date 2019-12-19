import React, { Component } from "react";
import Controls from "../components/Controls/Controls.jsx";
import Search from "../components/Search/Search.jsx";
import Filters from "../components/Filters/Filters.jsx";
import TasksContainer from "./TasksContainer/TasksContainer.jsx";
import '../../static/css/style.css';
import '../../static/css/normalize.css';

class App extends Component {
    render() {
        return (
            <div>
                <Controls />
                <Search />
                <Filters />
                <TasksContainer />
            </div>
        );
    }
}

export default App;
