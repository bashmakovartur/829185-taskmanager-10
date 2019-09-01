import moment from 'moment';

export const createTaskTemplate = (task) => {

  let description = ``;
  if (task.description) {
    description = task.description;
  }

  let deadline = ``;
  if (task.dueDate < new Date()) {
    deadline = `card--deadline`;
  }

  let isRepeatingDays = ``;
  if (task.isRepeating) {
    isRepeatingDays = `card--repeat`;
  }

  let isTaskDate = ``;
  if (task.dueDate) {
    isTaskDate = `<div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${moment(task.dueDate).format(`D`)} ${moment(task.dueDate).format(`MMMM`)}</span>
                  <span class="card__time">${moment(task.dueDate).format(`hh:mm A`)}</span>
                </p>
              </div>
            </div>`;
  }

  return `<article class="card card--${task.color} ${isRepeatingDays} ${deadline}">
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
          <p class="card__text">${description}</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            ${isTaskDate}
            <div class="card__hashtag">
            ${task.tags ? Array.from(task.tags).map((item) =>
    `<div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #${item}
                  </span>
                </span>
              </div>`
  ).join(``) : ``}
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
};
