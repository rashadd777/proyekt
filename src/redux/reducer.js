import store from "./store";

const globalState = {
  moviesSearch: [],
  moviesFavorites: [],
  titleFavorites: "Новый список",
  searchLine: "",
  apikey: "183d4bbe",
  moviesIdPostAxiosFavoritesARRay: [],
  copy: false,
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_SEARCH":
        return { ...state, searchLine: action.payload.textInput };

    case "GET_ADD_TO_MS":
        return {...state, moviesSearch: action.payload.arrayOfSearch};

    case "GET_TO_FAVORITE":
        
        const newMoviesFavorites = [...state.moviesFavorites];
        let flag = newMoviesFavorites.filter((el) => el.imdbID == action.payload.id);
        if(flag.length === 0) {
            const elCopy = {...action.payload.el};
            elCopy.select = true;
            newMoviesFavorites.push(elCopy);
            return {...state, moviesFavorites: newMoviesFavorites};
        }
        
    case "DELETE_FROM_FAV":
      const newMoviesFavoritesDel = [...state.moviesFavorites];
      const newArr = newMoviesFavoritesDel.filter((el) => el.imdbID !== action.payload.id);
      return {...state, moviesFavorites: newArr};
    
    case "DELETE_BUTTON_FROM_FAV_TRUE":
        
    const arrOfNewFilms = [...state.moviesSearch];
    const el = arrOfNewFilms.map((el) => {
      console.log(action.payload.el.imdbID)
      console.log(el)
      if(el.imdbID === action.payload.el.imdbID){
        el.select = true;
        console.log('check')
    }
    
    return el;
    
  });
    // el.forEach((el) => el.select = true)
      return {...state, moviesSearch: el};
    
    case "DELETE_BUTTON_FROM_FAV_FALSE":
      action.payload.el.select = false
      return {...state, textValueAddToFavoriteButton: false };
    
    case "FAVORITE_LIST_INPUT_SEARCH":
      return { ...state, titleFavorites: action.payload.textInput };

    case "POST_AXIOS_FAVORITE_LIST":
      const arrListOfFavorites = [...state.moviesIdPostAxiosFavoritesARRay];
      arrListOfFavorites.push(action.payload.elObjAxiosPostNewList);
      return {...state, moviesIdPostAxiosFavoritesARRay:arrListOfFavorites};

    case "COPY_FAVORITE_LIST":
      return {...state, copy: true}
    default: 
            return state
        
    
  }
  return globalState;
}
