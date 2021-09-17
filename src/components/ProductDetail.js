import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { timeTrans } from "../utils";
import { useHistory } from "react-router-dom";
import { productdetailAction } from "../redux/actions/detailAction";
import Loading from "./Loading";
const ProductDetail = ({ pathId, name, message, status }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, info, historyRates, isLoading } = useSelector(
    (state) => state.product
  );
  useLayoutEffect(() => {
    dispatch(
      productdetailAction({
        id: pathId,
        info: { id: id, name: name, message: message, status: status },
        transfer: `${pathId}-BTC`,
        granularity: 60,
      })
    );
  }, [dispatch]);
  // time, low, high, open, close, volume
  const [TIME, LOW, HIGH, OPEN, CLOSE, VOLUME] = [0, 1, 2, 3, 4, 5];
  const exitDetailHandler = (e) => {
    dispatch({ type: "CLEAN_DETAIL" });
    document.body.style.overflow = "auto";
    history.push("/");
  };
  const changeGranularity = (granularity) => {
    dispatch(
      productdetailAction({
        id: pathId,
        info: { id: id, name: name, message: message, status: status },
        transfer: `${pathId}-BTC`,
        granularity: granularity,
      })
    );
  };
  const changeTransfer = (transfer) => {
    dispatch(
      productdetailAction({
        id: pathId,
        info: { id: id, name: name, message: message, status: status },
        transfer: `${pathId}-${transfer}`,
        granularity: 60,
      })
    );
  };
  return (
    <DetailShadow>
      <Shadow onClick={exitDetailHandler} />
      <Detail>
        {!isLoading ? (
          id ? (
            <>
              <h2>{pathId}</h2>
              <h3>NAME:{info.name}</h3>
              <h3>
                status:{" "}
                <font color={info.status === "online" ? "#28FF28" : "#f00"}>
                  {info.status}
                </font>
              </h3>
              <p>{info.message ? info.message : "NONE"}</p>
              <button onClick={() => changeGranularity("60")}>1minute</button>
              <button onClick={() => changeGranularity("300")}>5minute</button>
              <button onClick={() => changeGranularity("900")}>15minute</button>
              <button onClick={() => changeGranularity("3600")}>1hr</button>
              <button onClick={() => changeGranularity("21600")}>6hr</button>
              <button onClick={() => changeGranularity("86400")}>1day</button>
              <button onClick={() => changeTransfer("usdt")}>USDT</button>
              <button onClick={() => changeTransfer("usdc")}>USDC</button>
              <button onClick={() => changeTransfer("BTC")}>BTC</button>
              <button onClick={() => changeTransfer("EUR")}>EUR</button>
              <table>
                <tbody>
                  <tr>
                    <th>TIME</th>
                    <th>LOW</th>
                    <th>HIGH</th>
                    <th>OPEN</th>
                    <th>CLOSE</th>
                    <th>VOLUMN</th>
                  </tr>
                  {historyRates.length ? (
                    historyRates.map((history) => (
                      <tr>
                        <td>{timeTrans(history[TIME])}</td>
                        <td>{history[LOW]}</td>
                        <td>{history[HIGH]}</td>
                        <td>
                          <font
                            color={
                              history[OPEN] < history[CLOSE] ? "green" : "red"
                            }
                          >
                            {history[OPEN]}
                          </font>
                        </td>
                        <td>
                          <font
                            color={
                              history[OPEN] < history[CLOSE] ? "green" : "red"
                            }
                          >
                            {history[CLOSE]}
                          </font>
                        </td>
                        <td>{history[VOLUME]}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">NO RESULT</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <h1>None</h1>
          )
        ) : (
          <Loading />
        )}
      </Detail>
    </DetailShadow>
  );
};
const DetailShadow = styled(motion.div)`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.5); */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;
const Shadow = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;
const Detail = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  min-width: 325px;
  max-width: 800px;
  padding: 1rem 2rem;
  margin: 1rem auto;

  border-radius: 1.5rem;
  background: #ffffff;
  text-align: center;
  h2 {
    text-align: center;
    margin: 1rem;
  }
  h3 {
    margin: 1rem;
  }
  p {
    margin: 1rem;
  }
  table {
    margin: 1rem auto;
    border-spacing: 1rem;
    th {
      text-align: left;
    }
    td {
      text-align: left;
    }
  }

  button {
    border: none;
    background: #ffbb77;
    color: #ffffff;
    margin: 0 0.2em;
    padding: 0.2em;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem 0;

    table {
      border-spacing: 0.5rem;
    }
  }
`;

export default ProductDetail;
