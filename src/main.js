import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createSearchTemplate} from '../src/components/search.js';
import {createFilterTemplate, createFilters} from '../src/components/filter.js';
import {createTaskTemplate} from '../src/components/task.js';
import {createTaskEditTemplate} from '../src/components/task-edit.js';
import {createLoadMoreButtonTemplate} from '../src/components/load-more-btn.js';
import {createBoardTemplate} from '../src/components/board.js';
import {createSortingTemplate} from '../src/components/sorting.js';
import {data, filters} from './data.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSearchTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(), `beforeend`);
const filtersElement = siteMainElement.querySelector(`.main__filter`);
filters.forEach((filters) => render(filtersElement, createFilters(filters), `beforeend`));

render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

new Array(7).fill(``).forEach(() => render(taskListElement, createTaskTemplate(data), `beforeend`));

const countForFilter = () => {
  const filtersAll = document.querySelectorAll(`.filter__label`);
  const cardsAll = document.querySelectorAll(`.card:not(.card--edit)`);
  let filtersArr = [];

  for (let i = 0; i <= filtersAll.length - 1; i++) {
    let filterId = filtersAll[i].getAttribute(`data-name`).trim();
    filtersArr.push(filterId);
  }

  for (let j = 0; j <= filtersArr.length - 1; j++) {
    let dataCounter = 0;
    for (let z = 0; z <= cardsAll.length - 1; z++) {
      let cardAttr = filtersArr[j];

      if (cardsAll[z].getAttribute(cardAttr) === `true`) {
        dataCounter++;
      }
      filtersAll[j].querySelector(`span`).innerHTML = `${dataCounter}`;
    }
  }
};

countForFilter();

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

const loadMoreBtn = boardElement.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, function () {
  new Array(8).fill(``).forEach(() => render(taskListElement, createTaskTemplate(data), `beforeend`));
  countForFilter();
});
