// Definizione delle costanti per i tipi di azione
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const SELECT_FAVOURITE = "SELECT_FAVOURITE";

// Action creators

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const fetchCategorySuccess = (category, songs) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: { category, songs },
});

export const fetchCategoryError = (category, error) => ({
  type: FETCH_CATEGORY_ERROR,
  payload: { category, error },
});

// Thunk per fetchare musica da Deezer, per categoria
export const fetchCategoryMusic = (category, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`); //&limit=12 non funziona
      if (!response.ok) throw new Error("Error fetching music");

      const { data } = await response.json();
      dispatch(fetchCategorySuccess(category, data));
    } catch (error) {
      dispatch(fetchCategoryError(category, error.message));
    }
  };
};

export const addToFavourites = (song) => ({
  type: ADD_TO_FAVOURITES,
  payload: song,
});

export const removeFromFavourites = (songId) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: songId,
});

export const selectFavourite = (song) => ({
  type: SELECT_FAVOURITE,
  payload: song,
});
