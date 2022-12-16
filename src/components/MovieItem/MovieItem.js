import React, { Component } from "react";
import "./MovieItem.css";
import { connect } from "react-redux";
import store from "../../redux/store";

class MovieItem extends Component {
  render() {
    // const { title, year, poster } = this.props.moviesSearch
    return this.props.moviesSearch.map((movie) => (
      <article className="movie-item">
        <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">    
            {movie.Title}&nbsp;({movie.Year})
          </h3>
          <button type="button" className="movie-item__add-button">
            Добавить в список
          </button>
        </div>
      </article>
    ));
  }
}
const mapStateToProps = (state) => {
  return {
    moviesSearch: state.moviesSearch,
  };
};

export default connect(mapStateToProps)(MovieItem);
