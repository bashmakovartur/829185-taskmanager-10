import {SiteMenuTemplate} from '../src/components/site-menu.js';
import {SearchTemplate} from '../src/components/search.js';
import {Filters} from '../src/components/filter.js';
import {Task} from '../src/components/task.js';
import {TaskEdit} from '../src/components/task-edit.js';
import {LoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {BoardTemplate} from '../src/components/board.js';
import {SortingTemplate} from '../src/components/sorting.js';
import {filters, card} from './data';
import {render, Position} from './helpers';

const TASK_COUNT = 8;
let taskMocks = new Array(TASK_COUNT)
  .fill(``)
  .map(card);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const siteMenuTemplate = new SiteMenuTemplate();
render(siteHeaderElement, siteMenuTemplate.getElement(), Position.BEFOREEND);

const searchTemplate = new SearchTemplate();
render(siteMainElement, searchTemplate.getElement(), Position.BEFOREEND);


let filterTemplate = new Filters(filters, taskMocks);
render(siteMainElement, filterTemplate.getElement(), Position.BEFOREEND);
const filtersBlock = siteMainElement.querySelector(`.filter`);

const boardTemplate = new BoardTemplate();
render(siteMainElement, boardTemplate.getElement(), Position.BEFOREEND);

const boardElement = siteMainElement.querySelector(`.board`);
const tasksContainer = siteMainElement.querySelector(`.board__tasks`);

const sortingTemplate = new SortingTemplate();
render(boardElement, sortingTemplate.getElement(), Position.AFTERBEGIN);

const loadMoreButtonTemplate = new LoadMoreButtonTemplate();
render(boardElement, loadMoreButtonTemplate.getElement(), Position.BEFOREEND);

const renderTask = (taskMock) => {
  const task = new Task(taskMock);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(taskEdit.getElement(), task.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(tasksContainer, task.getElement(), Position.BEFOREEND);
};

taskMocks.forEach((taskMock) => renderTask(taskMock));

const showMoreBtn = siteMainElement.querySelector(`.load-more`);

const showMore = () => {
  taskMocks = taskMocks.concat(taskMocks);
  taskMocks.forEach((taskMock) => renderTask(taskMock));
  filtersBlock.remove();
  filterTemplate = new Filters(filters, taskMocks);
  siteMainElement.insertBefore(filterTemplate.getElement(), boardElement);
  showMoreBtn.removeEventListener(`click`, showMore);
  showMoreBtn.remove();
};

showMoreBtn.addEventListener(`click`, showMore);

class BoardController {
  constructor() {
  }

  init() {

  }
}
