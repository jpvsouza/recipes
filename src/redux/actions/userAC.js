export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE';
export const REMOVE_FAVORITE_RECIPE = 'REMOVE_FAVORITE_RECIPE';

const setLoginInfoAC = (userMail, userPassword) => ({
  type: SET_LOGIN_INFO,
  userMail,
  userPassword,
});

export const addFavoriteRecipeAC = (recipeObj) => ({
  type: ADD_FAVORITE_RECIPE,
  recipeObj,
});

export const removeFavoriteRecipeAC = (recipeId) => ({
  type: REMOVE_FAVORITE_RECIPE,
  recipeId,
});

export default setLoginInfoAC;
