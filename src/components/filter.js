export const createFilters = (filter) => {
  const id = filter.id ? String(filter.id) : ``;
  const name = filter.id ? String(filter.id) : ``;
  const isChecked = filter.isChecked ? `checked` : ``;
  const isDisabled = filter.isDisabled ? `disabled` : ``;
  return `<input
      type="radio"
      id=${id}
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked}
      ${isDisabled}
    />
    <label data-name="${name}" for="filter__${name}" class="filter__label" title="${name}">${name} <span class="filter__${name}-count">
    
</span></label
    >`;
};

export const createFilterTemplate = () => {
  return `<section class="main__filter filter container"></section>`;
};
