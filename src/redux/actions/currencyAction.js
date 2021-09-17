import axios from "axios";
import { currenciesURL, getCurrencyURL } from "../../api";
import { useSelector } from "react-redux";
export const currencyFetchAction = () => async (dispatch) => {
  dispatch({
    type: "LOADING_CURRENCIES",
  });
  const currencies = await axios.get(currenciesURL());
  dispatch({
    type: "FETCH_CURRENCIES",
    payload: {
      data: currencies.data,
    },
  });
};
export const searchAction = (product_id) => async (dispatch) => {
  const currency = await axios.get(getCurrencyURL(product_id));
  dispatch({
    type: "SEARCH_CURRENCY",
    payload: {
      data: currency.data,
    },
  });
};
export const clearSearchedAction = () => (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCHED",
  });
};
export const favoriteAddAction = (productId) => (dispatch, getState) => {
  dispatch({
    type: "ADD_TO_FAVORITE",
    payload: {
      data: productId,
    },
  });
  const { favorite } = getState().currencies;
  localStorage.setItem("favorite", JSON.stringify(favorite));
};
export const favoriteDeleteAction = (productId) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_FROM_FAVORITE",
    payload: {
      data: productId,
    },
  });
  const { favorite } = getState().currencies;
  if (favorite.length) {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  } else {
    localStorage.removeItem("favorite");
  }
};
