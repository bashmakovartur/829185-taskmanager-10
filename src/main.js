import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createSearchTemplate} from '../src/components/search.js';
import {createFilterTemplate} from '../src/components/filter.js';
import {createTaskTemplate} from '../src/components/task.js';
import {createTaskEditTemplate} from '../src/components/task-edit.js';
import {createLoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {createBoardTemplate} from '../src/components/board.js';
import {createSortingTemplate} from '../src/components/sorting.js';
import {tasks, filters} from './data';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const getSomeTasks = tasks.slice(0, 7);
const getTheRestOfTasks = tasks.slice(7, 14);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSearchTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(filters, getSomeTasks), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

for (let key of getSomeTasks) {
  render(taskListElement, createTaskTemplate(key), `beforeend`);
}

const moreBtn = siteMainElement.querySelector(`.load-more`);

moreBtn.addEventListener(`click`, function showMore() {
  for (let key of getTheRestOfTasks) {
    render(taskListElement, createTaskTemplate(key), `beforeend`);
  }
  document.querySelector(`.main__filter`).remove();
  render(boardElement, createFilterTemplate(filters, tasks), `beforebegin`);
  moreBtn.remove();

});
