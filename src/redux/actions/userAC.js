export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE';

const setLoginInfoAC = (userMail, userPassword) => ({
  type: SET_LOGIN_INFO,
  userMail,
  userPassword,
});

export const addFavoriteRecipeAC = (recipeObj) => ({
  type: ADD_FAVORITE_RECIPE,
  recipeObj,
});

export default setLoginInfoAC;
