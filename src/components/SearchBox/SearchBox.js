import React, { Component } from 'react';
import './SearchBox.css';
import store from '../../redux/store';
import { connect } from 'react-redux';
import { searchLineChangeHandlerAction, addTomoviesSearchAfterAxiosGet  } from '../../redux/action';
import axios from 'axios'

class SearchBox extends Component {

    getDataOnSUbmit  = async () => {
        const result = await axios.get(`http://www.omdbapi.com/?s=${this.props.searchLine}&apikey=${this.props.apikey}`)
        .then((res) => {
            const moviesSearchGetDataArray = res.data.Search.map((el) => {
                el.select = false
                return el
            })
            return moviesSearchGetDataArray
        })
        this.props.addTomoviesSearchAfterAxiosGetProps(result)
    }

    



    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        this.getDataOnSUbmit()
    }

    render() {
        const { searchLine } = this.props;
        console.log(this.props.searchLine)
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Введите название фильма:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            onChange={(e) => { this.props.searchLineChangeHandlerActionProps(e) }}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Найти
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchLine: state.searchLine,
        apikey: state.apikey,
        moviesSearch: state.moviesSearch,
        textValueAddToFavoriteButton: state.textValueAddToFavoriteButton,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTomoviesSearchAfterAxiosGetProps: (result) => { dispatch(addTomoviesSearchAfterAxiosGet(result)) },
        searchLineChangeHandlerActionProps: (e) => { dispatch(searchLineChangeHandlerAction(e.target.value)) }
    }
    
}

 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);