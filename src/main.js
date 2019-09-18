import {SiteMenuTemplate} from '../src/components/site-menu.js';
import {SearchTemplate} from '../src/components/search.js';
import {Filters} from '../src/components/filter.js';
import {LoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
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

const boardController = new BoardController(siteMainElement, taskMocks);
boardController.init();

const showMoreBtn = siteMainElement.querySelector(`.load-more`);

const showMore = () => {
  taskMocks = taskMocks.slice().push(taskMocks);
  boardController.init();
  filtersBlock.remove();
  filterTemplate = new Filters(filters, taskMocks);
  siteMainElement.insertBefore(filterTemplate.getElement(), boardElement);
  showMoreBtn.removeEventListener(`click`, showMore);
  showMoreBtn.remove();
};

showMoreBtn.addEventListener(`click`, showMore);
