import {getRandDate, getRandIntBetween, getRandBool} from "./helpers";

export const card = () => ({
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`][getRandIntBetween(0, 2)],
  dueDate: getRandDate(new Date(2019, 7), new Date(2019, 8, 31)),
  repeatingDays: {
    Mo: getRandBool(),
    Tu: getRandBool(),
    We: getRandBool(),
    Th: getRandBool(),
    Fr: getRandBool(),
    Sa: getRandBool(),
    Su: getRandBool(),
  },
  isRepeating: getRandBool(),
  tags: [
    `catfishing`,
    `assscratch`,
    `bitchiing`,
    `revolution`,
  ],
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ][getRandIntBetween(0, 4)],
  isFavorite: getRandBool(),
  isArchive: getRandBool(),
});

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
