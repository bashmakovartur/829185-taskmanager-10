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

/* Вспомогательное перечисление
*/
export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/* Создаёт разметку
*
* @param {string} template разметка
*/
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/* Отрисовывает разметку в родительском элементе
*
* @param {string} container родительский элемент
* @param {string} element разметка
* @param {string} place место отрисовки, AFTERBEGIN - вначале, BEFOREEND - вконце.
*/
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

/* Удаляет разметку
*
* @param {string} template разметка
*/
export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
