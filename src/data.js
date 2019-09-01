import {getRandDate, getRandIntBetween, getRandBool} from "./helpers";
import moment from "moment";

const card = {
  descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  get description() {
    return this.descriptions[getRandIntBetween(0, this.descriptions.length - 1)];
  },
  get dueDate() {
    return getRandDate(new Date(2019, 7), new Date(2019, 8, 31));
  },
  repeatingDays: {
    Mo: getRandBool(),
    Tu: getRandBool(),
    We: getRandBool(),
    Th: getRandBool(),
    Fr: getRandBool(),
    Sa: getRandBool(),
    Su: getRandBool(),
  },
  get isRepeating() {
    return getRandBool();
  },
  tagsList: [
    `homework`,
    `theory`,
    `practice`,
    `catfishing`,
    `assscratch`,
    `bitchiing`,
    `revolution`,
    `seigheil`
  ],
  get tags() {
    return new Set([
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)],
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)],
      this.tagsList[getRandIntBetween(0, this.tagsList.length - 1)]
    ]);
  },
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  get color() {
    return this.colors[getRandIntBetween(0, this.colors.length - 1)];
  },
  get isFavorite() {
    return getRandBool();
  },
  get isArchive() {
    return getRandBool();
  },
};
const cards = (sample, count) => {
  const arr = [];
  while (count > 0) {
    const obj = Object.assign({}, sample);
    arr.push(obj);
    count--;
  }

  return arr;
};

//  start 4-1

class Task {
  constructor({description, dueDate, tags, color, repeatingDays}) {
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._color = color;
    this._element = null;
    this._repeatingDays = repeatingDays;
  }

  getTemplate() {
    return `<article class="card card--${this._color} ${Object.values(this._repeatingDays).some(it => it === true) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${this._description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${this._dueDate.toDateString()}</span>
                          <span class="card__time">${this._dueDate.getHours()}:${this._dueDate.getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${(Array.from(this._tags).map(tag => (`
                          <span class="card__hashtag-inner">
                          <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
                          <button type="button" class="card__hashtag-name">#${tag}</button>
                          <button type="button" class="card__hashtag-delete">delete</button>
                        </span>`.trim()))).join(``)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
  }

}

class TaskEdit {
  constructor({description, dueDate, tags, color, repeatingDays}) {
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._colors = color;
    this._element = null;
    this._repeatingDays = repeatingDays;
  }
}

const TOTAL_TASKS = 3;

//  end 4-1
const TOTAL_CARDS = 14;
export const tasks = cards(card, TOTAL_CARDS);

const countFilters = (title, arr) => {
  let count = 0;
  if (title === `all`) {
    count = arr.length;
  }

  if (title === `overdue`) {
    for (let key of arr) {
      if (key.dueDate < new Date()) {
        count++;
      }
    }
  }

  if (title === `today`) {
    for (let key of arr) {
      if (key.dueDate.getMonth() === new Date().getMonth() && key.dueDate.getDate() === new Date().getDate()) {
        count++;
      }
    }
  }

  if (title === `favorites`) {
    for (let key of arr) {
      if (key.isFavorite) {
        count++;
      }
    }
  }

  if (title === `repeating`) {
    for (let key of arr) {
      if (key.isRepeating) {
        count++;
      }
    }
  }
  if (title === `tags`) {
    for (let key of arr) {
      if (key.tags) {
        count++;
      }
    }
  }

  if (title === `archive`) {
    for (let key of arr) {
      if (key.isArchive) {
        count++;
      }
    }
  }

  return count;

};
export const filters = [
  {
    title: `all`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `overdue`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `today`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `favorites`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `repeating`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `tags`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  },
  {
    title: `archive`,
    count(arr) {
      return countFilters(this.title, arr);
    }
  }
];
