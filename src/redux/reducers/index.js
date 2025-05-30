import { SET_SEARCH_QUERY, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_ERROR, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SELECT_FAVOURITE } from "../actions";

const initialState = {
  searchQuery: "",
  searchResults: { content: [], error: null },
  rockSongs: { content: [], error: null },
  popSongs: { content: [], error: null },
  hipHopSongs: { content: [], error: null },
  favourites: { content: [] },
  selectFavourite: { content: null },
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case FETCH_CATEGORY_SUCCESS: {
      const { category, songs } = action.payload;
      const prevContent = state[category]?.content || [];

      // no sovrascr
      const isSame = prevContent.length === songs.length && prevContent.every((song, i) => song.id === songs[i].id);

      if (isSame) return state;

      if (category === "searchResults") {
        return {
          ...state,
          searchResults: { content: songs, error: null },
        };
      }

      return {
        ...state,
        [category]: { content: songs, error: null },
      };
    }

    case FETCH_CATEGORY_ERROR: {
      const { category, error } = action.payload;

      if (category === "searchResults") {
        return {
          ...state,
          searchResults: { content: [], error },
        };
      }

      return {
        ...state,
        [category]: { content: [], error },
      };
    }

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          content: [...state.favourites.content, action.payload],
        },
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          content: state.favourites.content.filter((song) => song.id !== action.payload),
        },
      };

    case SELECT_FAVOURITE:
      return {
        ...state,
        selectFavourite: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default musicReducer;
