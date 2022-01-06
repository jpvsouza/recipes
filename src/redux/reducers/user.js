import { SET_LOGIN_INFO,
  ADD_FAVORITE_RECIPE,
  REMOVE_FAVORITE_RECIPE,
} from '../actions/userAC';

const INITIAL_STATE = {
  userMail: '',
  userPassword: '',
  favoriteRecipes: [],
  doneRecipes: [],
  inProgressRecipes: [],
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

  case REMOVE_FAVORITE_RECIPE:
    return {
      ...state,
      favoriteRecipes: [...state.favoriteRecipes
        .filter(({ id }) => (id !== action.recipeId))],
    };

  default:
    return state;
  }
}

export default user;
