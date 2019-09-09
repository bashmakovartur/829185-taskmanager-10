import {createElement} from "../helpers";

export class Filters {
  constructor(filters, taskMocks) {
    this._filters = filters;
    this._arr = taskMocks;
    this._element = null;
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

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
