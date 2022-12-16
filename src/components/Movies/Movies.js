import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import store from "../../redux/store";
import { addtoFavoriteAction, deleteFromFavBUTTON_TRUE, deleteFromFavBUTTON_FALSE } from "../../redux/action";
import { connect } from "react-redux";

class Movies extends Component {



    onClickToFavorite = (el, id) => {
        this.props.addtoFavoriteActionProps(el, id);
       
        if(el.select === false) {
          this.props.addtoFavoriteActionButtonTRUEProps(el);
        } else if(el.select === true) {
          this.props.addtoFavoriteActionButtonFALSEProps(el);
        }
    }




  render() {
    return (
      <ul className="movies">
        {
   
        this.props.moviesSearch.map((movie) => (
          
          <li className="movies__item" key={movie.imdbID}>
            <article className="movie-item">
              <img
                className="movie-item__poster"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="movie-item__info">
                <h3 className="movie-item__title">
                  {movie.Title}&nbsp;({movie.Year})
                  {console.log(movie.select)}
                </h3>
               { 
               <button type="button" className={movie.select? "focus-movie-item_add-button" : "movie-item__add-button"} onClick={() => this.onClickToFavorite(movie, movie.imdbID)}>
                  {
                    movie.select? "" : "Добавить в список" 
                    
                  }
                </button>
                }
              </div>
            </article>
          </li>
        ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesSearch: state.moviesSearch,
    moviesFavorites: state.moviesFavorites,
    textValueAddToFavoriteButton: state.textValueAddToFavoriteButton, 
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addtoFavoriteActionProps: (el, id) => {dispatch(addtoFavoriteAction(el, id))},
        addtoFavoriteActionButtonTRUEProps: (id) => {dispatch(deleteFromFavBUTTON_TRUE(id))},
        addtoFavoriteActionButtonFALSEProps: (id) => {dispatch(deleteFromFavBUTTON_FALSE(id))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
