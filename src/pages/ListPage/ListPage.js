import React, { Component } from 'react';
import './ListPage.css';
import { connect } from "react-redux";
import axios from "axios";

class ListPage extends Component {

    state = {
        arrList: [], //id
        arrNewList: [],
        arr: [],
    }

    componentDidMount() {
        this.getDataListPage()
    }
    getDataListPage = () => {
      axios.get(`https://acb-api.algoritmika.org/api/movies/list/${this.props.match.params.id}`)
        .then((result) => {
            this.setState({ arrList: result.data.movies}, () => this.takeRes())
            console.log(this.state.arrList)
        })
    }

    getDataAboutFilms = (id) => {
        axios.get(` http://www.omdbapi.com/?i=${id}&apikey=${this.props.apikey}`)
        .then((result) => {
            const arrData = [...this.state.arrNewList];
            arrData.push(result.data)
            this.setState({ arrNewList: arrData}, )
            console.log(this.state)
        })
    }

    takeRes = () => {
        this.state.arrList.forEach((item) => this.getDataAboutFilms(item))
        
    }
    

    render() { 
            
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.titleFavorites}</h1>
                <ul>
                    {this.state.arrNewList.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <img className='img_cin_fav' src={item.Poster}></img>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
      moviesFavorites: state.moviesFavorites,
      titleFavorites: state.titleFavorites,
      moviesIdPostAxiosFavoritesARRay: state.moviesIdPostAxiosFavoritesARRay,
      apikey: state.apikey,
    };
  };
  
  
  export default connect(mapStateToProps)(ListPage);