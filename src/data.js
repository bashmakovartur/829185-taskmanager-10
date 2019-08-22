import {getRandBool, getRandDate, getRandInt} from '../src/utils';

export const data = {
  descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  get description() {
    return this.descriptions[getRandInt(0, (this.descriptions.length - 1))];
  },
  dueDate: getRandDate(Date.now()),
  isRepeating: getRandBool(),
  repeatingDays: {
    Mo: getRandBool(),
    Tu: getRandBool(),
    We: getRandBool(),
    Th: getRandBool(),
    Fr: getRandBool(),
    Sa: getRandBool(),
    Su: getRandBool(),
  },
  hasTags: getRandBool(),
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
    return this.colors[getRandInt(0, this.colors.length - 1)];
  },
  isFavorite: getRandBool(),
  isArchive: getRandBool(),
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
