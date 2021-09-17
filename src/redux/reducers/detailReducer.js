const initState = {
  id: "",
  info: [],
  historyRates: [],
  isLoading: true,
};
const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    case "GET_HISTORY_RATES":
      return {
        ...state,
        id: action.payload.id,
        info: action.payload.info,
        historyRates: action.payload.data,
        isLoading: false,
      };
    case "CLEAN_DETAIL":
      return {
        ...state,
        id: "",
        info: [],
        historyRates: [],
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
export default detailReducer;
