/* Возвращает случайное логическое значение
*/
export const getRandBool = () => {

  return Boolean(Math.round(Math.random()));
};

/* Возваращет случайное значение в диапазоне
*
* @param {int} min число нижней границы
* @param {int} max число верхней границы
*/
export const getRandIntBetween = (min, max) => {

  return Math.floor(min + Math.random() * (max + 1 - min));
};

/* Возваращет случайную дату в диапазоне
*
* @param {string} start нижняя граница
* @param {string} end верхняя граница
*/
export const getRandDate = (start, end) => {

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
