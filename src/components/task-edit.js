import {AbstractClass} from "../data";
import moment from 'moment';

export class TaskEdit extends AbstractClass {
  constructor({description, dueDate, tags, color, repeatingDays}) {
    super();
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._color = color;
    this._repeatingDays = repeatingDays;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return `<article class="card card--edit card--${this._color} 
            ${Object.values(this._repeatingDays).some((it) => it) ? `card--repeat` : ``}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
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
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${this._description}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
             <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>
                      
                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="${moment(this._dueDate).format(`dd MMM DD YYYY`)}"
                          />
                        </label>
                      </fieldset>
                      
                        <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">${Object.values(this._repeatingDays).some((it) => it) ? `yes` : `no`}</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                        ${Object.keys(this._repeatingDays).map((day) => (`
                        <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-${day}-4"
                            name="repeat"
                            value="${day}"
                            ${this._repeatingDays[day] ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-${day}-4"
                            >${day}</label
                          >`)).join(``)}
                        </div>
                      </fieldset>
                    </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                 ${(Array.from(this._tags).map((tag) => (`
                          <span class="card__hashtag-inner">
                          <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
                          <button type="button" class="card__hashtag-name">#${tag}</button>
                          <button type="button" class="card__hashtag-delete">delete</button>
                        </span>`.trim()))).join(``)}
              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-4"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-4"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-4"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
                checked
              />
              <label
                for="color-yellow-4"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-4"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-4"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-4"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-4"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-4"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-4"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
  }

  _subscribeOnEvents() {
    this.getElement()
      .querySelector(`.card__hashtag-input`).addEventListener(`keydown`, (evt) => {
        if (evt.key === `Enter`) {
          evt.preventDefault();
          this.getElement().querySelector(`.card__hashtag-list`).insertAdjacentHTML(`beforeend`, `<span class="card__hashtag-inner">
            <input
              type="hidden"
              name="hashtag"
              value="${evt.target.value}"
              class="card__hashtag-hidden-input"
            />
            <p class="card__hashtag-name">
              #${evt.target.value}
            </p>
            <button type="button" class="card__hashtag-delete">
              delete
            </button>
          </span>`);
          evt.target.value = ``;
        }

        this.getElement()
          .querySelectorAll(`.card__hashtag-delete`)
          .forEach((btn) => btn.addEventListener(`click`, (e) => {
            e.target.closest(`.card__hashtag-inner`).remove();
          }));
      });

    this.getElement()
      .querySelectorAll(`.card__hashtag-delete`)
      .forEach((btn) => btn.addEventListener(`click`, (evt) => {
        evt.target.closest(`.card__hashtag-inner`).remove();
      }));

    this.getElement()
      .querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, (evt) => {
        const btn = evt.currentTarget;
        evt.preventDefault();
        switch (btn.querySelector(`.card__date-status`).innerHTML) {
          case `yes`:
            btn.querySelector(`.card__date-status`).innerHTML = `no`;
            btn.nextElementSibling.querySelector(`.form-control`).value = ``;
            btn.nextElementSibling.style.display = `none`;
            break;
          case `no`:
            btn.querySelector(`.card__date-status`).innerHTML = `yes`;
            btn.nextElementSibling.style.display = `block`;
            break;
        }
      });

    this.getElement()
      .querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.getElement().querySelectorAll(`.card__repeat-day-input`).forEach((item) => item.removeAttribute(`checked`));
        switch (this.getElement().querySelector(`.card__repeat-status`).innerHTML) {
          case `yes`:
            this.getElement().querySelector(`.card__repeat-status`).innerHTML = `no`;
            this.getElement().querySelector(`.card__repeat-days`).style.display = `none`;
            break;
          case `no`:
            this.getElement().querySelector(`.card__repeat-status`).innerHTML = `yes`;
            this.getElement().querySelector(`.card__repeat-days`).style.display = `block`;
            break;
        }
      });

    this.getElement().querySelectorAll(`.card__color`).forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.getElement().querySelectorAll(`.card__color`).forEach((i) => {
          evt.currentTarget.closest(`.card`).classList.remove(`card--` + i.previousElementSibling.value);
        });

        const color = evt.currentTarget.previousElementSibling.value;
        evt.currentTarget.closest(`.card`).classList.add(`card--` + color);
        this.getElement().querySelectorAll(`.card__color-input`).forEach((j) => j.removeAttribute(`checked`));
        evt.currentTarget.previousElementSibling.setAttribute(`checked`, `checked`);
      });
    });
  }
}
