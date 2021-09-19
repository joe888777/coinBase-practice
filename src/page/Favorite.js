import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { currencyFetchAction } from "../redux/actions/currencyAction";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import { useLocation } from "react-router-dom";

const Favorite = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currencyFetchAction());
  }, [dispatch]);
  const { currencies, favorite } = useSelector((state) => state.currencies);
  return (
    <>
      <h1>FAVORITE</h1>
      <FavoriteStyle>
        {pathId && <ProductDetail />}
        {favorite.length ? (
          currencies
            .filter((product) => favorite.includes(product.id))
            .map((currency) => (
              <Product
                id={currency.id}
                name={currency.name}
                message={currency.message}
                status={currency.status}
                key={currency.id}
              />
            ))
        ) : (
          <h2>No favorite</h2>
        )}
      </FavoriteStyle>
    </>
  );
};

const FavoriteStyle = styled(motion.div)`
  padding: 1rem 2rem;
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 1rem;
`;
export default Favorite;
