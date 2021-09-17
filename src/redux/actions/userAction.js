export const signIn = () => {
  return {
    type: "SIGN_IN",
    payload: {
      data: "name",
    },
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
