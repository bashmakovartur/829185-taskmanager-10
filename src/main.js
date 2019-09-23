import {filters, card} from './data';
import {MainController} from "./controllers/MainController";
import {SiteMenuTemplate} from "./components/site-menu";
import {render, Position} from './helpers';

const TASK_COUNT = 16;
let taskMocks = new Array(TASK_COUNT)
  .fill(``)
  .map(card);

const siteMainElement = document.querySelector(`.main`);
const siteControl = siteMainElement.querySelector(`.main__control`);
const siteMenu = new SiteMenuTemplate();
render(siteControl, siteMenu.getElement(), Position.BEFOREEND);

const mainController = new MainController(siteMainElement, filters, taskMocks);

mainController.init();
