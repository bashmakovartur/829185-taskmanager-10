/*
 * Возвращает случайное значение true/false.
 */
export const getRandBool = () => Boolean(Math.round(Math.random()));

/*
 * Возвращает случайную дату от выбранной дата в интервале месяца.
 *
 * @param {string} date дата от которой будет отсчёт
 */
export const getRandDate = (date) => date + 1 + Math.floor(Math.random() * 31) * 24 * 60 * 60 * 1000;

/*
 * Возвращает случайное число в интервале между min и max.
 *
 * @param {int} min минимальное число
 * @param {int} max максимальное число
 */
export const getRandInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
