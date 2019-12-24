import React, { Component } from 'react';
import Controls from '../components/Controls/Controls.jsx';
import Search from '../components/Search/Search.jsx';
import Filters from '../components/Filters/Filters.jsx';
import TasksContainer from './TasksContainer/TasksContainer.jsx';
import '../../static/css/style.css';
import '../../static/css/normalize.css';
import mockTasks from './mocks.js';
import getFilteredTasks from './helpers.js'

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
            sort: ''
        };
    }

    updateTasks = (e) => {
        this.setState({ tasks: maxTasks });
        e.target.classList.add('visually-hidden');
    };

    filterTasks = (e) => {
        this.setState({filter: e.target.dataset.type});
    };

    sortTasks = (e) => {
        e.preventDefault();
        this.setState({sort: e.target.dataset.type});
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
        let filteredTasks = this.state.tasks.filter(tasks => {
            let currentTasks;
            const query = this.state.searchField.toString().toLowerCase().trim();
            switch (this.state.searchType) {
                case 'hashtag':
                    currentTasks = tasks.hashTags.join('').toLowerCase().trim().includes(query);
                    break;
                case 'number':
                    currentTasks = new Date(tasks.dateValue).toLocaleDateString("en-US", {day: 'numeric'}).includes(query);
                    break;
                default:
                    currentTasks = tasks.titleText.toLowerCase().trim().includes(query);
                    break;
            }

            return currentTasks;
        });

        if (this.state.sort) {
            const defaultTasks = filteredTasks;
            switch (this.state.sort) {
                case 'date-up':
                    filteredTasks.sort((a,b) => a.dateValue - b.dateValue);
                    break;
                case 'date-down':
                    filteredTasks.sort((a,b) => b.dateValue - a.dateValue);
                    break;
                case 'default':
                    filteredTasks =  defaultTasks;
                    break;
            }
        }

        if (this.state.filter) {
            console.log(this.state.filter);
            const defaultTasks = filteredTasks;
            switch (this.state.filter) {
                case 'all':
                    filteredTasks = defaultTasks;
                    break;
                case 'overdue':
                    filteredTasks = filteredTasks.filter(item => item.isOverdue === true);
                    break;
                case 'today':
                    filteredTasks = filteredTasks.filter(item => item.isToday === true);
                    break;
                case 'favorites':
                    filteredTasks = filteredTasks.filter(item => item.isFavorite === true);
                    break;
                case 'repeating':
                    filteredTasks = filteredTasks.filter(item => item.isRepeating === true);
                    break;
                case 'tags':
                    filteredTasks = filteredTasks.filter(item => item.hashTags.length !== 0);
                    break;
                case 'archive':
                    filteredTasks = filteredTasks.filter(item => item.isArchive === true);
                    break;
            };
        }

        return (
            <div>
                <Controls />
                <Search searchChange={this.onSearchChange}/>
                <Filters filterTasks={this.filterTasks} arr={filteredTasks}/>
                <TasksContainer
                    sortTasks={this.sortTasks}
                    updateTasks={this.updateTasks}
                    arr={filteredTasks}
                />
            </div>
        );
    }
}

export default App;
