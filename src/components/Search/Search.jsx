import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <section className="main__search search container">
                <input
                    type="text"
                    id="search__input"
                    className="search__input"
                    placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
                />
                <label className="visually-hidden" htmlFor="search__input">Search</label>
            </section>
        );
    }
}

export default Search;
