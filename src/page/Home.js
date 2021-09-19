import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
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
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <ProductDetail pathId={pathId} />}
        </AnimatePresence>
        {searched && (
          <SearchedStyle>
            <h2>Searched：</h2>
            <Product
              id={searched.id}
              name={searched.name}
              message={searched.message}
              status={searched.status}
              key={`${searched.id} searched `}
              layoutId={pathId}
            />
          </SearchedStyle>
        )}
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
      </AnimateSharedLayout>
    </>
  );
};
const HomeStyle = styled(motion.div)`
  padding: 1rem 2rem;
  display: grid;
  min-height: 100vh;
<<<<<<< HEAD

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr auto;
  grid-gap: 1rem;
`;
const SearchedStyle = styled(motion.div)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
=======
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 1rem;
`;

>>>>>>> dbc25797cf6c94fbb24f3ef89416e256927d6a56
export default Home;
