import React, { Component } from "react";

class Task extends Component {

    render() {
        const {
            color,
            titleText,
            dateValue,
            hashTags,
            isRepeating,
            isDeadline,
            isFavorite,
            isArchive
        } = this.props;

        const colorClass = color ? ' card--' + color : '';
        const repeatingClass = isRepeating ? ' card--repeat' : '';
        const deadlineClass = isDeadline ? ' card--deadline' : '';

        return (

                <article className={`card`+ colorClass + repeatingClass + deadlineClass}>
                    <div className="card__form">
                        <div className="card__inner">
                            <div className="card__control">
                                <button
                                    type="button"
                                    className="card__btn card__btn--edit"
                                >
                                    edit
                                </button>
                                <button
                                    type="button"
                                    className={`card__btn card__btn--archive ${!isArchive ? 'card__btn--disabled' : ''}`}
                                >
                                    archive
                                </button>
                                <button
                                    type="button"
                                    className={`card__btn card__btn--favorites ${!isFavorite ? 'card__btn--disabled' : ''}`}
                                >
                                    favorites
                                </button>
                            </div>

                            <div className="card__color-bar">
                                <svg className="card__color-bar-wave" width="100%" height="10">
                                    <use xlinkHref="#wave"></use>
                                </svg>
                            </div>

                            {titleText && <div className="card__textarea-wrap">
                                <p className="card__text">{titleText}</p>
                            </div>}

                            <div className="card__settings">
                                <div className="card__details">
                                    {dateValue &&
                                    <div className="card__dates">
                                        <div className="card__date-deadline">
                                            <p className="card__input-deadline-wrap">
                                                <span className="card__date">
                                                    {new Date(dateValue).toLocaleDateString("en-US", { day: 'numeric'})}&nbsp;
                                                    {new Date(dateValue).toLocaleDateString("en-US", { month: 'long'})}&nbsp;
                                                    {new Date(dateValue).toLocaleDateString("en-US", { year: 'numeric'})}
                                                </span>
                                                <span className="card__time">{new Date(dateValue).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit'})}</span>
                                            </p>
                                        </div>
                                    </div>}
                                    {hashTags.length > 0 && <div className="card__hashtag">
                                        <div className="card__hashtag-list">
                                            <span className="card__hashtag-inner">
                                                {hashTags && hashTags.map((item, index) => {
                                                    return(
                                                          <span key={index} className="card__hashtag-name">
                                                            #{item}
                                                          </span>
                                                        )})}
                                            </span>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
        );
    }
}

export default Task;
