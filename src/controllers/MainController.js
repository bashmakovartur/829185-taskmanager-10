import {SearchTemplate} from "../components/search";
import {Filters} from "../components/filter";
import {BoardController} from "./BoardController";
import {Position, render} from "../helpers";

export class MainController {
  constructor (container, filters, taskMocks){
    this._container = container;
    this._search = new SearchTemplate();
    this._filters = new Filters(filters, taskMocks);
    this._boardController = new BoardController(container, taskMocks);
  }

  init() {
    render(this._container, this._search.getElement(), Position.BEFOREEND);
    render(this._container, this._filters.getElement(), Position.BEFOREEND);

    this._boardController.init();
  }
}
