// or
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/userAction";
const LogInBtn = () => {
  const dispatch = useDispatch();
  const responseGoogleSuccess = (response) => {
    dispatch({
      type: "SIGN_IN",
      payload: {
        data: response,
      },
    });
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};
export default LogInBtn;
