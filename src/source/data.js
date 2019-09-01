import {getRandBool, getRandDate, getRandInt} from '../helpers/utils';

export const data = {
  descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  repeatingDays: {
    Mo: getRandBool(),
    Tu: getRandBool(),
    We: getRandBool(),
    Th: getRandBool(),
    Fr: getRandBool(),
    Sa: getRandBool(),
    Su: getRandBool(),
  },
  get hasTags() {
    return getRandBool();
  },
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
  get description() {
    return this.descriptions[getRandInt(0, (this.descriptions.length - 1))];
  },
  get dueDate() {
    return getRandDate(Date.now());
  },
  get isRepeating() {
    return getRandBool();
  },
  get color() {
    return this.colors[getRandInt(0, this.colors.length - 1)];
  },
  get isFavorite() {
    return getRandBool();
  },
  get isArchive() {
    return getRandBool();
  }
};

export const filtersArr = [
  {
    id: `all`,
    isChecked: true,
    isDisabled: false
  },
  {
    id: `overdue`,
    isChecked: false,
    isDisabled: true,
  },
  {
    id: `today`,
    isChecked: false,
    isDisabled: true,
  }, {
    id: `favorites`,
    isChecked: false,
    isDisabled: false,
  }, {
    id: `repeating`,
    isChecked: false,
    isDisabled: false
  }, {
    id: `tags`,
    isChecked: false,
    isDisabled: false
  }, {
    id: `archive`,
    isChecked: false,
    isDisabled: false
  }];
