// or
import { GoogleLogin } from "react-google-login";

const LogInBtn = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
export default LogInBtn;
