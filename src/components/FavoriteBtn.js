import styled from "styled-components";
import { motion } from "framer-motion";
import star from "../img/star.png";
import { useLayoutEffect, useState } from "react";
import starEmpty from "../img/starempty.png";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteDeleteAction,
  favoriteAddAction,
} from "../redux/actions/currencyAction";
const FavoriteBtn = ({ productId }) => {
  const dispatch = useDispatch();
  const [favoriteYes, setFavoriteYes] = useState(false);
  const { favorite } = useSelector((state) => state.currencies);
  useLayoutEffect(() => {
    if (favorite.includes(productId)) {
      setFavoriteYes(true);
    } else {
      setFavoriteYes(false);
    }
  }, [favoriteYes]);
  const handleBtnClick = () => {
    if (!favoriteYes) {
      dispatch(favoriteAddAction(productId));
    } else {
      dispatch(favoriteDeleteAction(productId));
    }
    setFavoriteYes((prev) => !prev);
  };
  return (
    <StarBtn onClick={handleBtnClick}>
      {favoriteYes ? <img src={star} alt="" /> : <img src={starEmpty} alt="" />}
    </StarBtn>
  );
};
const StarBtn = styled(motion.button)`
  background: unset;
  border: none;
  outline: none;
  width: 25px;
  img {
    display: block;
    width: 100%;
  }
`;
export default FavoriteBtn;
