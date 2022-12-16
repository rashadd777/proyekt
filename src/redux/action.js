
export function searchLineChangeHandlerAction(textInput) {
 
    return {
        type: "CHANGE_INPUT_SEARCH",
        payload: {
            textInput
        }
    }
}

export function addTomoviesSearchAfterAxiosGet(arrayOfSearch) {
    return {
        type: "GET_ADD_TO_MS",
        payload: {
            arrayOfSearch
        }
    }
}

export function addtoFavoriteAction(el, id) {
    return {
        type: "GET_TO_FAVORITE",
        payload: {
            el: el,
            id: id,
        }
    }
}

export function deleteFromFavAction(id) {
    return {
        type: "DELETE_FROM_FAV",
        payload: {
            id
        }
    }
}

export function deleteFromFavBUTTON_TRUE(el) {
    return {
        type: "DELETE_BUTTON_FROM_FAV_TRUE",
        payload: {
            el
        }
    }
}

export function deleteFromFavBUTTON_FALSE(el) {
    return {
        type: "DELETE_BUTTON_FROM_FAV_FALSE",
        payload: {
            el
        }
    }
}


export function inputFavoriteListChangeHandlerAction(textInput) {
 
    return {
        type: "FAVORITE_LIST_INPUT_SEARCH",
        payload: {
            textInput
        }
    }
}

export function axiosPostNewFavoriteListAction(elObjAxiosPostNewList) {
 
    return {
        type: "POST_AXIOS_FAVORITE_LIST",
        payload: {
            elObjAxiosPostNewList
        }
    }
}

export function copyFavoritesAction() {
 
    return {
        type: "COPY_FAVORITE_LIST",
    }
}



