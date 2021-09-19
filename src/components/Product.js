import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { productdetailAction } from "../redux/actions/detailAction";
import { Link } from "react-router-dom";
import FavoriteBtn from "./FavoriteBtn";
const Product = ({ id, name, message, status }) => {
  const dispatch = useDispatch();
  const handleProductClick = (e) => {
    dispatch(
      productdetailAction({
        id: id,
        info: { id: id, name: name, message: message, status: status },
        transfer: `${id}-BTC`,
      })
    );
  };
  return (
    <CurrencyStyled>
      <Link to={`/product/${id}`} onClick={handleProductClick}>
        <h3 layoutId={`title ${id}`}>{id}</h3>
        <label>{name}</label>
        <p>{message}</p>
        <h4>{status}</h4>
      </Link>
      <StarContaner>
        <FavoriteBtn productId={id} />
      </StarContaner>
    </CurrencyStyled>
  );
};

const CurrencyStyled = styled(motion.div)`
  border: solid 1px #000;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #eac100, #ffe153);
  width: 100%;
  max-width: 400px;
  position: relative;
  a {
    display: block;
  }
  h3 {
    color: #bb3d00;
  }
  label {
    color: #d26900;
    font-weight: bold;
  }
  p {
    color: #000;
    font-family: "Brush Script MT", "Brush Script Std", "cursive";
  }
  h4 {
    color: green;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const StarContaner = styled(motion.div)`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;
export default Product;
