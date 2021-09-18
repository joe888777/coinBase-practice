import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { currencyFetchAction } from "../redux/actions/currencyAction";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currencyFetchAction());
  }, [dispatch]);
  const { currencies, isLoading, searched } = useSelector(
    (state) => state.currencies
  );

  return (
    <>
      <h1>Currencies</h1>
      {searched && (
        <HomeStyle>
          <h2>Searched：</h2>
          <Product
            id={searched.id}
            name={searched.name}
            message={searched.message}
            status={searched.status}
            key={`${searched.id} searched `}
          />
        </HomeStyle>
      )}
      {pathId && <ProductDetail pathId={pathId} />}
      {!isLoading ? (
        <HomeStyle>
          {currencies.length &&
            currencies.map((currency) => (
              <Product
                id={currency.id}
                name={currency.name}
                message={currency.message}
                status={currency.status}
                key={currency.id}
              />
            ))}
        </HomeStyle>
      ) : (
        <Loading />
      )}
    </>
  );
};
const HomeStyle = styled(motion.div)`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export default Home;
