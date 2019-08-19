import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createSearchTemplate} from '../src/components/search.js';
import {createFilterTemplate} from '../src/components/filter.js';
import {createTaskTemplate} from '../src/components/task.js';
import {createTaskEditTemplate} from '../src/components/task-edit.js';
import {createLoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {createBoardTemplate} from '../src/components/board.js';
import {createSortingTemplate} from '../src/components/sorting.js';
import {task} from  '../src/task';

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

//new Array(3).fill(``).forEach(() => render(taskListElement, createTaskTemplate(), `beforeend`));

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

render(taskListElement, createTaskTemplate(task), `beforeend`);

for(let key in task){
    console.log(task[key]);
}

for(let key in task.descriptions){
  console.log(task.descriptions[key]);
}
