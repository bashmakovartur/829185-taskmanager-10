import {BoardTemplate} from "../components/board";
import {Position, render} from "../helpers";
import {Task} from "../components/task";
import {TaskEdit} from "../components/task-edit";
import {TasksList} from "../components/task-list";

export class BoardController {
  constructor(container, tasks) {
    this._container = container;
    this._tasks = tasks;
    this._board = new BoardTemplate();
    this._tasksList = new TasksList();
  }

  init() {
    render(this._container.getElement(), this._board.getElement(), Position.BEFOREEND);
    // render(this._board.getElement(), this._tasksList.getElement(), Position.BEFOREEND);

    this._tasks.forEach((taskMocks) => this._renderTask(taskMocks));
  }

  _renderTask(taskMock) {
    const taskComponent = new Task(taskMock);
    // const taskEditComponent = new TaskEdit(taskMock);

    // const onEscKeyDown = (evt) => {
    //   if (evt.key === `Escape` || evt.key === `Esc`) {
    //     this._tasksList.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
    //     document.removeEventListener(`keydown`, onEscKeyDown);
    //   }
    // };
    //
    // taskComponent.getElement()
    //   .querySelector(`.card__btn--edit`)
    //   .addEventListener(`click`, () => {
    //     this._tasksList.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
    //     document.addEventListener(`keydown`, onEscKeyDown);
    //   });
    //
    // taskEditComponent.getElement().querySelector(`textarea`)
    //   .addEventListener(`focus`, () => {
    //     document.removeEventListener(`keydown`, onEscKeyDown);
    //   });
    //
    // taskEditComponent.getElement().querySelector(`textarea`)
    //   .addEventListener(`blur`, () => {
    //     document.addEventListener(`keydown`, onEscKeyDown);
    //   });
    //
    // taskEditComponent.getElement()
    //   .querySelector(`.card__save`)
    //   .addEventListener(`click`, () => {
    //     this._tasksList.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
    //     document.removeEventListener(`keydown`, onEscKeyDown);
    //   });

    render(this._tasksList.getElement(), taskComponent.getElement(), Position.BEFOREEND);
  }
}
