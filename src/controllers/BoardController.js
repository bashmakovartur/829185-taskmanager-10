import {BoardTemplate} from "../components/board";
import {Position, render, unrender} from "../helpers";
import {Task} from "../components/task";
import {TaskEdit} from "../components/task-edit";
import {TasksListTemplate} from "../components/task-list";
import {SortingTemplate} from "../components/sorting";

export class BoardController {
  constructor(container, tasks) {
    this._container = container;
    this._tasks = tasks;
    this._board = new BoardTemplate();
    this._sort = new SortingTemplate();
    this._tasksList = new TasksListTemplate();
  }

  init() {
    render(this._container, this._board.getElement(), Position.BEFOREEND);
    render(this._board.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    render(this._board.getElement(), this._tasksList.getElement(), Position.BEFOREEND);

    this._tasks.forEach((taskMocks) => this._renderTask(taskMocks));

    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderBoard() {
    unrender(this._tasksList.getElement());

    this._tasksList.removeElement();
    render(this._board.getElement(), this._tasksList.getElement(), Position.BEFOREEND);
    this._tasks.forEach((taskMock) => this._renderTask(taskMock));
  }

  _renderTask(taskMock) {
    const taskComponent = new Task(taskMock);
    const taskEditComponent = new TaskEdit(taskMock);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._tasksList.getElement().replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    taskComponent.getElement()
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, () => {
        this._tasksList.getElement().replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    taskEditComponent.getElement()
      .querySelector(`.card__save`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(taskEditComponent.getElement().querySelector(`.card__form`));
        const entry = {
          description: formData.get(`text`),
          color: formData.get(`color`),
          tags: new Set(formData.getAll(`hashtag`)),
          dueDate: new Date(formData.get(`date`)),
          isRepeating: false,
          repeatingDays: formData.getAll(`repeat`).reduce((acc, it) => {
            acc[it] = true;
            return acc;
          }, {
            mo: false,
            tu: false,
            we: false,
            th: false,
            fr: false,
            sa: false,
            su: false,
          })
        };

        this._tasks[this._tasks.findIndex((it) => it === taskMock)] = entry;
        this._renderBoard(this._tasks);

        document.removeEventListener(`keydown`, onEscKeyDown);
      });


    render(this._tasksList.getElement(), taskComponent.getElement(), Position.BEFOREEND);
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
