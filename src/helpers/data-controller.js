import {data, filtersArr} from "../source/data";

/*
 * Возвращает массив с заданным числом карточек.
 *
 * @param {int} numberOfCards максимальное число
 */
export const getSomeCards = (numberOfCards) => {
  const arr = [];
  if (parseInt(numberOfCards, 10)) {
    while (numberOfCards > 0) {
      arr.push(data);
      numberOfCards--;
    }
  }

  return arr;
};

/*
* Возвращает массив фильтров.
*/
export const filters = () => filtersArr;

/*
* Возвращает значения для фильтров.
*/
export const countForFilter = () => {
  const filtersAll = document.querySelectorAll(`.filter__label`);
  const cardsAll = document.querySelectorAll(`.card:not(.card--edit)`);
  let filtersArray = [];
  for (let i = 0; i <= filtersAll.length - 1; i++) {
    let filterId = filtersAll[i].dataset.name.trim();
    filtersArray.push(filterId);
  }
  for (let j = 0; j < filtersArray.length; j++) {
    let dataCounter = 0;
    for (let z = 0; z < cardsAll.length; z++) {
      let dataSetString = cardsAll[z].dataset;
      if (dataSetString[filtersArray[j]] === `true`) {
        dataCounter++;
      }
      filtersAll[j].querySelector(`span`).innerHTML = `${dataCounter}`;
    }
  }
};
