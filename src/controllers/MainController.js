import {SearchTemplate} from "../components/search";
import {Filters} from "../components/filter";
import {BoardController} from "./BoardController";
import {Position, render, unrender} from "../helpers";

export class MainController {
  constructor(container, filters, taskMocks) {
    this._taskMock = taskMocks;
    this._taskMockSliced = this._taskMockSliced;
    this._filters = filters;
    this._container = container;
    this._search = new SearchTemplate();
    this._onNumberTasksChange = this._onNumberTasksChange.bind(this);
  }

  _filterTaskMock() {
    if (this._taskMock.length > 8) {
      this._taskMockSliced = this._taskMock.slice(0, 8);
      console.log(this._taskMockSliced);
      console.log(this._taskMock);
    }
  }

  init() {
    this._filterTaskMock();
    render(this._container, this._search.getElement(), Position.BEFOREEND);
    this._renderFilters(this._taskMockSliced);

    this._boardController = new BoardController(this._container, this._taskMockSliced, this._onNumberTasksChange);
    this._boardController.renderBoard();
  }

  _renderFilters(mocks) {
    this._filters = new Filters(this._filters, mocks);
    render(this._container, this._filters.getElement(), Position.BEFOREEND);
  }

  _onNumberTasksChange() {
    this._filters.removeElement();
    unrender(this._filters.getElement());

    this._renderFilters(this._taskMock);
    this._boardController = new BoardController(this._container, this._taskMock, this._onNumberTasksChange);
    this._boardController.renderBoard();
  }
}
