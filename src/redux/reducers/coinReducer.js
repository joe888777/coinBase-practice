const initState = {
  currencies: [],
  favorite: [],
  searched: null,
  isLoading: true,
};
const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_CURRENCIES":
      return { ...state, isLoading: true };
    case "FETCH_CURRENCIES":
      return {
        ...state,
        currencies: action.payload.data,
        favorite: localStorage.getItem("favorite")
          ? JSON.parse(localStorage.getItem("favorite"))
          : [],
        isLoading: false,
      };
    case "ADD_TO_FAVORITE":
      return { ...state, favorite: [...state.favorite, action.payload.data] };
    case "DELETE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((id) => id !== action.payload.data),
      };
    case "SEARCH_CURRENCY":
      return { ...state, searched: action.payload.data };
    case "CLEAR_SEARCHED":
      return { ...state, searched: null };
    default:
      return { ...state };
  }
};
export default coinReducer;
