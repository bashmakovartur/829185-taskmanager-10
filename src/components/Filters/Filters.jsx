import React from "react";

const filters = ['all', 'overdue', 'today', 'favorites', 'repeating', 'tags', 'archive'];

const Filters = ({arr}) => {
    const getCount = (arr, field) => {
        switch (field) {
            case 'all':
                return arr.length;
                break;
            case 'overdue':
                return arr.filter(item => item.isOverdue === true).length;
                break;
            case 'today':
                return arr.filter(item => item.isToday === true).length;
                break;
            case 'favorites':
                return arr.filter(item => item.isFavorite === true).length;
                break;
            case 'repeating':
                return arr.filter(item => item.isRepeating === true).length;
                break;
            case 'tags':
                return arr.filter(item => item.hashTags.length !== 0).length;
                break;
            case 'archive':
                return arr.filter(item => item.isArchive === true).length;
                break;
            default:
                0;
                break
        }
    };

    return (
        <section className="main__filter filter container">
            {filters.map((item, i) => {
                return (<div key={i}>
                    <input
                        type="radio"
                        id={`filter__${item}`}
                        className="filter__input visually-hidden"
                        name="filter"
                        value={item}
                    />
                    <label
                        htmlFor={`filter__${item}`}
                        className="filter__label"
                    >
                        {item}
                        <span className={`filter__${item}-count`}>
                                &nbsp;{getCount(arr, item)}
                        </span>
                    </label>
                </div>)
            })}
        </section>
    );
};

export default Filters;
