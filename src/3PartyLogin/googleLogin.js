// or
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../redux/actions/userAction";
import styled from "styled-components";
const LogInBtn = () => {
  const dispatch = useDispatch();
  const { isSignedIn, userName } = useSelector((state) => state.user);
  const responseGoogleSuccess = (response) => {
    dispatch(signIn(response.profileObj.name));
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = (response) => {
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
              className="google-button"
            >
              Sign In
            </button>
          )}
          clientId={process.env.GOOGLE_CLIEND_ID}
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
          clientId={process.env.GOOGLE_CLIEND_ID}
          yarn
          onLogoutSuccess={logout}
        />
      )}
    </BtnStyled>
  );
};

const BtnStyled = styled.div`
  button {
    padding: 0.5rem;
    height: 2rem;
    line-height: 1rem;
    overflow: hidden;
  }
  button:hover {
    transform: scale(1.2);
  }
`;
export default LogInBtn;
