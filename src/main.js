import {SiteMenuTemplate} from '../src/components/site-menu.js';
import {SearchTemplate} from '../src/components/search.js';
import {Filters} from '../src/components/filter.js';
import {LoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {BoardTemplate} from '../src/components/board.js';
import {SortingTemplate} from '../src/components/sorting.js';
import {filters, card} from './data';
import {render, Position} from './helpers';
import {BoardController} from "./controllers/BoardController";

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


const boardElement = siteMainElement.querySelector(`.board`);
const tasksContainer = siteMainElement.querySelector(`.board__tasks`);

// const sortingTemplate = new SortingTemplate();
// render(boardElement, sortingTemplate.getElement(), Position.AFTERBEGIN);

// const loadMoreButtonTemplate = new LoadMoreButtonTemplate();
// render(boardElement, loadMoreButtonTemplate.getElement(), Position.BEFOREEND);

const boardController = new BoardController(tasksContainer, taskMocks);
boardController.init();

const showMoreBtn = siteMainElement.querySelector(`.load-more`);

// const showMore = () => {
//   taskMocks = taskMocks.concat(taskMocks);
//   taskMocks.forEach((taskMock) => renderTask(taskMock));
//   filtersBlock.remove();
//   filterTemplate = new Filters(filters, taskMocks);
//   siteMainElement.insertBefore(filterTemplate.getElement(), boardElement);
//   showMoreBtn.removeEventListener(`click`, showMore);
//   showMoreBtn.remove();
// };
//
// showMoreBtn.addEventListener(`click`, showMore);
