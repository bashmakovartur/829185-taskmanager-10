import {AbstractComponent} from "../data";

export class BoardTemplate extends AbstractComponent{

  getTemplate() {
    return `<section class="board container">
    <div class="board__tasks"></div>
  </section>`;
  }
}
