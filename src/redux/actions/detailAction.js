import axios from "axios";
import { historicRateURL } from "../../api";
export const productdetailAction = (product) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  try {
    const detail = await axios.get(
      historicRateURL(product.transfer, product.granularity)
    );
    dispatch({
      type: "GET_HISTORY_RATES",
      payload: {
        id: product.id,
        info: product.info,
        data: detail.data,
      },
    });
  } catch (err) {
    dispatch({
      type: "GET_HISTORY_RATES",
      payload: {
        id: product.id,
        info: product.info,
        data: [],
      },
    });
  }
};
