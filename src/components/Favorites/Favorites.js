import React, { Component } from "react";
import ListPage from '../../pages/ListPage/ListPage';
import { Link, Route } from "react-router-dom"
import "./Favorites.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import {
  deleteFromFavAction,
  deleteFromFavBUTTON_FALSE,
  inputFavoriteListChangeHandlerAction,
  axiosPostNewFavoriteListAction,
  copyFavoritesAction
} from "../../redux/action";
import axios from "axios";

class Favorites extends Component {
  onClickDel = (id) => {
    this.props.addtoFavoriteActionButtonFALSEProps(id);
    this.props.deleteToFavProps(id);
  };

  onClickPost = () => {
    const arr = this.props.moviesFavorites.map((el) => {
    this.props.copyFavoritesProps()
      return el.imdbID;
    });
    const imuteDataTitle = this.props.titleFavorites;
    const headers = {
      "content-type": "application/json",
    };
    const body = {
      title: imuteDataTitle,
      movies: arr,
    };

    const jsonPostData = JSON.stringify({ body });
    console.log(this.props.match);

    axios
      .post(`https://acb-api.algoritmika.org/api/movies/list `, body, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const dataPostObj = res.data;
        this.props.axiosPostNewFavoriteListActionProps(dataPostObj);
      });
  };

  render() {
    return (
      <div className="favorites">
        <input
          value={this.props.titleFavorites}
          onChange={(e) => {
            this.props.inputFavoriteListChangeHandlerProps(e);
          }}
          className="favorites__name"
        />
        <ul className="favorites__list">
          {this.props.moviesFavorites.map((el) => {
            return (
              <h1 className="h1_favorite" key={el.imdbID}>
                {el.Title}({el.Year}){" "}</h1>
            );
          })}
        </ul>
        <button
          type="button"
          className={this.props.moviesIdPostAxiosFavoritesARRay[0]? "open_save_button" : "favorites__save"}
          onClick={() => {
            this.onClickPost();
          }}
        >
          {!this.props.moviesIdPostAxiosFavoritesARRay.length ? (
            "Сохранить список"
          ) : (
            <button className="open_save_button">
              <Link className="open_save_a" to={`/list/${this.props.moviesIdPostAxiosFavoritesARRay[0].id}`}>
                Открыть {this.props.moviesIdPostAxiosFavoritesARRay[0].title}
              </Link>
            </button>
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesFavorites: state.moviesFavorites,
    titleFavorites: state.titleFavorites,
    moviesIdPostAxiosFavoritesARRay: state.moviesIdPostAxiosFavoritesARRay,
    copy: state.copy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToFavProps: (id) => {
      dispatch(deleteFromFavAction(id));
    },
    addtoFavoriteActionButtonFALSEProps: (id) => {
      dispatch(deleteFromFavBUTTON_FALSE(id));
    },
    inputFavoriteListChangeHandlerProps: (e) => {
      dispatch(inputFavoriteListChangeHandlerAction(e.target.value));
    },
    axiosPostNewFavoriteListActionProps: (el) => {
      dispatch(axiosPostNewFavoriteListAction(el));
    },
    copyFavoritesProps: () => {
        dispatch(copyFavoritesAction());
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
