import {BoardTemplate} from "../components/board";
import {Position, render, unrender} from "../helpers";
import {TaskController} from "../controllers/TaskController";
import {TasksListTemplate} from "../components/task-list";
import {SortingTemplate} from "../components/sorting";
import {LoadMoreButtonTemplate} from '../components/load-more-btn';

export class BoardController {
  constructor(container, tasks) {
    this._container = container;
    this._tasks = tasks;
    this._board = new BoardTemplate();
    this._sort = new SortingTemplate();
    this._tasksList = new TasksListTemplate();
    this._loadMore = new LoadMoreButtonTemplate();

    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this._container, this._board.getElement(), Position.BEFOREEND);
    render(this._board.getElement(), this._tasksList.getElement(), Position.AFTERBEGIN);

    this._tasks.forEach((taskMocks) => this._renderTask(taskMocks));
    this._renderLoadMoreBtn();
    this._renderSortFilters();
  }

  _renderBoard() {
    unrender(this._tasksList.getElement());
    unrender(this._loadMore.getElement());
    this._tasksList.removeElement();
    this._loadMore.removeElement();


    render(this._board.getElement(), this._tasksList.getElement(), Position.BEFOREEND);
    this._tasks.forEach((taskMock) => this._renderTask(taskMock));

    this._renderLoadMoreBtn();
  }

  _renderTask(task) {
    const taskController = new TaskController(this._tasksList, task, this._onDataChange, this._onChangeView);
    this._subscriptions.push(taskController.setDefaultView.bind(taskController));
  }

  _renderLoadMoreBtn() {
    render(this._board.getElement(), this._loadMore.getElement(), Position.BEFOREEND);

    this._loadMore.getElement()
      .addEventListener(`click`, (evt) => this._onLoadMoreClick(evt));
  }

  _renderSortFilters() {
    render(this._board.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData, oldData) {
    this._tasks[this._tasks.findIndex((it) => it === oldData)] = newData;

    this._renderBoard(this._tasks);
  }

  _onLoadMoreClick(evt) {
    evt.preventDefault();
    console.log(this._tasks);

    const arrLength = this._tasks.length;
    for(let i = 0; i <= arrLength - 1; i++){
      this._tasks.push(this._tasks[i]);
    }

    unrender(this._tasksList.getElement());
    this._tasksList.removeElement();

    render(this._board.getElement(), this._tasksList.getElement(), Position.BEFOREEND);
    this._tasks.forEach((taskMock) => this._renderTask(taskMock));


    unrender(this._loadMore.getElement());
    this._loadMore.removeElement();
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }

    this._tasksList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `date-up`:
        const sortedByDateUpTasks = this._tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
        sortedByDateUpTasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
      case `date-down`:
        const sortedByDateDownTasks = this._tasks.slice().sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
      case `default`:
        this._tasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
    }
  }
}
