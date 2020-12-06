import React from "react";
import PropTypes from "prop-types";
import './Movies.css';

// Wyświetlanie wszystkich elementów z klasy App
const Movies = props => (
    <div className="List">
        <ul className="list-group">
            <li className="list-group-item list-group-item-info list-group-item-action">
                <b>Tytuł: </b>{props.title}<br></br>
                <b>Premiera: </b>{props.year}</li><br></br>
        </ul>
    </div>
);

Movies.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string
  };

export default Movies;