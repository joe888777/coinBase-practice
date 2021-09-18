// or
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../redux/actions/userAction";
import styled from "styled-components";
import { BackgroundColor } from "chalk";
const LogInBtn = () => {
  const dispatch = useDispatch();
  const { isSignedIn, userName } = useSelector((state) => state.user);
  const responseGoogleSuccess = (response) => {
    // dispatch({
    //   type: "SIGN_IN",
    //   payload: {
    //     data: response.profileObj.name,
    //   },
    // });
    dispatch(signIn(response.profileObj.name));
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = (response) => {
    // dispatch({
    //   type: "SIGN_OUT",
    // });
    dispatch(signOut());
    console.log(response);
  };

  return (
    <BtnStyled>
      {!isSignedIn ? (
        <GoogleLogin
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign In
            </button>
          )}
          clientId="288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              {userName} Sign Out
            </button>
          )}
          clientId="288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com"
          yarn
          onLogoutSuccess={logout}
        />
      )}
    </BtnStyled>
  );
};

const BtnStyled = styled.div`
  button {
    background-color: #000;
    padding: 0.5rem;
    height: 2rem;
    overflow: hidden;
  }
  button:hover {
    transform: scale(1.2);
  }
`;
export default LogInBtn;
