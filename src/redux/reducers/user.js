import { SET_LOGIN_INFO,
  ADD_FAVORITE_RECIPE,
} from '../actions/userAC';

const INITIAL_STATE = {
  userMail: '',
  userPassword: '',
  favoriteRecipes: [],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_INFO:
    return {
      ...state,
      userMail: action.userMail,
      userPassword: action.userPassword,
    };

  case ADD_FAVORITE_RECIPE:
    return {
      ...state,
      favoriteRecipes: [...state.favoriteRecipes, action.recipeObj],
    };

  default:
    return state;
  }
}

export default user;
