const initState = {
  userName: "",
  isSignedIn: false,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userName: action.payload.data };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
export default userReducer;
