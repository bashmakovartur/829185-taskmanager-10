import {AbstractComponent} from "../data";

export class LoadMoreButtonTemplate extends AbstractComponent{

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
}
