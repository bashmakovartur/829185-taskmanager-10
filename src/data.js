export const data = {
  descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  get description() {
    return this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
  },
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  isRepeating: Boolean(Math.round(Math.random())),
  repeatingDays: {
    Mo: Boolean(Math.round(Math.random())),
    Tu: Boolean(Math.round(Math.random())),
    We: Boolean(Math.round(Math.random())),
    Th: Boolean(Math.round(Math.random())),
    Fr: Boolean(Math.round(Math.random())),
    Sa: Boolean(Math.round(Math.random())),
    Su: Boolean(Math.round(Math.random())),
  },
  hasTags: Boolean(Math.round(Math.random())),
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
  ]),
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  get color() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  },
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
};

export const filters = [
  {
    id: `all`,
    class: `filter__all`,
    isChecked: true,
    isDisabled: false
  },
  {
    id: `overdue`,
    class: `filter__overdue`,
    isChecked: false,
    isDisabled: true,
  },
  {
    id: `today`,
    class: `filter__today`,
    isChecked: false,
    isDisabled: true,
  }, {
    id: `favorites`,
    class: `filter__favorites`,
    isChecked: false,
    isDisabled: false,
  }, {
    id: `repeating`,
    class: `filter__repeating`,
    isChecked: false,
    isDisabled: false
  }, {
    id: `tags`,
    class: `filter__tags`,
    isChecked: false,
    isDisabled: false
  }, {
    id: `archive`,
    class: `filter__archive`,
    isChecked: false,
    isDisabled: false
  }];
