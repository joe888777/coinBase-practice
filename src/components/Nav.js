import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchAction,
  clearSearchedAction,
} from "../redux/actions/currencyAction";
import SignInBtn from "../3PartyLogin/google";

const Nav = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const search = (e) => {
    if (searchText) {
      dispatch(searchAction(searchText));
    } else {
      dispatch(clearSearchedAction());
    }
  };
  return (
    <>
      <NavStyled>
        <SignInBtn />
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>search</button>
      </NavStyled>
      {}
    </>
  );
};
const NavStyled = styled(motion.nav)`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
  background: #000;
  padding: 0.5rem;
  input {
    width: 25%;
    height: 2rem;
    border: none;
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    border: none;
    font-size: 1rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background-color: #ff5809;
    color: #ffffff;
  }
  a {
    display: block;
    color: #fff;
    padding: 0.5rem;
  }
`;
export default Nav;
