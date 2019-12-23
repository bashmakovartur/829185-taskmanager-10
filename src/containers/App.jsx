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
            searchType: '',
            filter: '',
            count: ''
        };
    }

    updateTasks = (e) => {
        this.setState({ tasks: maxTasks });
        e.target.classList.add('visually-hidden');
    };

    onSearchChange = (event) => {
        const query = event.target.value;
        const firstChar = query.substr(0,1).trim();
        if (firstChar === '#') {
            this.setState({searchType: 'hashtag'});
        } else if (Number.isInteger(parseInt(firstChar))) {
            this.setState({searchType: 'number'});
        } else {
            this.setState({searchType: 'text'});
        }

        if (query.substr(0,1) === '#') {
            this.setState({searchField: query.slice(1)});
        } else {
            this.setState({searchField: query });
        }
    };

    render() {
        const filteredTasks = this.state.tasks.filter(tasks => {
            const query = this.state.searchField.toString().toLowerCase().trim();
            let target  = '';
            switch (this.state.searchType) {
                case 'hashtag':
                    target = tasks.hashTags.join('').toLowerCase().trim();
                    break;
                case 'number':
                    const date = new Date(tasks.dateValue);
                    console.log(date);
                    target = date.toLocaleDateString("en-US", { day: 'numeric'});
                    break;
                default:
                    target = tasks.titleText.toLowerCase().trim();
                    break;
            }

            return  target.includes(query);
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
