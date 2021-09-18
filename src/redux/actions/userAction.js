export const signIn = (response) => {
  return {
    type: "SIGN_IN",
    payload: {
      data: response,
    },
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
