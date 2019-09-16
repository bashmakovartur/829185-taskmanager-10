import {AbstractClass} from "../data";

export class Filters extends AbstractClass {
  constructor(filters, taskMocks) {
    super();
    this._filters = filters;
    this._arr = taskMocks;
  }

  getTemplate() {
    return `<section class="main__filter filter container">
    ${Array.from(this._filters.map((filter) =>
    `<input
      type="radio"
      id="filter__${filter.title}"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__${filter.title}" class="filter__label">
      ${filter.title} <span class="filter__${filter.title}-count">${filter.count(this._arr)}</span></label
    >`)).join(``)}
  </section>`;
  }
}
