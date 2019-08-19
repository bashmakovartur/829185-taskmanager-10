import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createSearchTemplate} from '../src/components/search.js';
import {createFilterTemplate} from '../src/components/filter.js';
import {createTaskTemplate} from '../src/components/task.js';
import {createTaskEditTemplate} from '../src/components/task-edit.js';
import {createLoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {createBoardTemplate} from '../src/components/board.js';
import {createSortingTemplate} from '../src/components/sorting.js';
import {data} from './data.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSearchTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

new Array(7).fill(``).forEach(() => render(taskListElement, createTaskTemplate(data), `beforeend`));

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
