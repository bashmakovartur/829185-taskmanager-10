export const createTaskTemplate = (task) => {
  let taskColor = `card--${task.color}`;

  //desc
  let description = ``;
  if (task.description) {
    description = task.description;
  }

  //repDays
  let isRepDays = ``;
  if (task.isRepeating) {
    isRepDays = `card--repeat`;
  }

  //tags
  for (let key in task.tags) {
    `<div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    ${key}
                  </span>
                </span>
              </div>`
  }


  let isTaskDate = ``;
  if (task.dueDate) {
    isTaskDate = `<div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${moment(task.dueDate).format(`D`)} ${moment(task.dueDate).format(`MMMM`)}</span>
                  <span class="card__time">${moment(task.dueDate).format(`h:mm A`)}</span>
                </p>
              </div>
            </div>`;
  }

  return `<article class="card ${taskColor} ${isRepDays}">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
};
