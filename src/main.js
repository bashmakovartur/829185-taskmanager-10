import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createSearchTemplate} from '../src/components/search.js';
import {createFilterTemplate, createFilters} from '../src/components/filter.js';
import {createTaskTemplate} from '../src/components/task.js';
import {createTaskEditTemplate} from '../src/components/task-edit.js';
import {createLoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {createBoardTemplate} from '../src/components/board.js';
import {createSortingTemplate} from '../src/components/sorting.js';
import {getSomeCards, filters, countForFilter} from './helpers/data-controller';

const CARDS = 7;
const TOTAL_CARDS = getSomeCards(CARDS);
const FILTERS = filters();

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSearchTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(), `beforeend`);
const filtersElement = siteMainElement.querySelector(`.main__filter`);

FILTERS.map((i) => render(filtersElement, createFilters(i), `beforeend`));

render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

TOTAL_CARDS.map((i) => render(taskListElement, createTaskTemplate(i), `beforeend`));
countForFilter();

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
const loadMoreBtn = boardElement.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, function showMore() {
  TOTAL_CARDS.map((i) => render(taskListElement, createTaskTemplate(i), `beforeend`));
  countForFilter();
});
