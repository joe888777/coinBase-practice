import {
  GoogleButton,
  IAuthorizationOptions,
  isLoggedIn,
  createOAuthHeaders,
  GoogleAuthConsumer,
  logOutOAuthUser,
  GoogleAuth,
} from "react-google-oauth2";
import { useSelector, useDispatch } from "react-redux";
const key_test =
  "288285290690-cvr169h30fkopc07ui00nano8jb54a6u.apps.googleusercontent.com";
const key_web =
  "288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com";
const URL_test = "https://localhost:3000";
const URL_web = "https://eloquent-pasteur-bf2205.netlify.app/";
function SignInBtn(props: any) {
  const options: IAuthorizationOptions = {
    clientId: key_web,
    redirectUri: URL_web,
    scopes: ["openid", "profile", "email"],
    includeGrantedScopes: true,
    accessType: "offline",
  };
  const handleLogIn = () => {};
  const handleLogOut = () => {};
  return (
    <>
      <GoogleAuth>
        <GoogleAuthConsumer>
          {({ responseState, isAuthenticated }: IOAuthState) => {
            if (!isLoggedIn()) {
              return (
                <GoogleButton
                  placeholder="demo/search.png" // Optional
                  options={options}
                  apiUrl={`${URL_web}/login.json`}
                  defaultStyle={true} // Optional
                  displayErrors={true}
                >
                  Sign in with google
                </GoogleButton>
              );
            } else {
              return <button>LOGOUT</button>;
            }
          }}
        </GoogleAuthConsumer>
      </GoogleAuth>
      }
    </>
  );
}
export default SignInBtn;
