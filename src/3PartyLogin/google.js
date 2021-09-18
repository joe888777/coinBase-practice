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
    redirectUri: "https://eloquent-pasteur-bf2205.netlify.app/",
    scopes: ["openid", "profile", "email"],
    includeGrantedScopes: true,
    accessType: "offline",
  };

  return (
    <>
      <GoogleButton
        placeholder="demo/search.png" // Optional
        options={options}
        apiUrl="https://eloquent-pasteur-bf2205.netlify.app/"
        defaultStyle={true} // Optional
      />
    </>
  );
}
export default SignInBtn;
