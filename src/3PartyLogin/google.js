import {
  GoogleButton,
  IAuthorizationOptions,
  isLoggedIn,
  createOAuthHeaders,
  logOutOAuthUser,
  GoogleAuth,
} from "react-google-oauth2";

function SignInBtn(props: any) {
  const options: IAuthorizationOptions = {
    clientId:
      "288285290690-54ivau6btbsbdc1fo6lvu8tu4jvi3nrf.apps.googleusercontent.com",
    redirectUri: "https://localhost:3000/",
    scopes: ["openid", "profile", "email"],
    includeGrantedScopes: true,
    accessType: "offline",
  };

  return (
    <>
      <GoogleButton
        placeholder="demo/search.png" // Optional
        options={options}
        apiUrl="http://localhost:5000/google_login"
        defaultStyle={true} // Optional
      />
    </>
  );
}
export default SignInBtn;
