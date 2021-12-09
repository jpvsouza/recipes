import { START_REQUEST_API,
  MEALS_API_SUCCESS,
  DRINKS_API_SUCCESS,
  API_ERROR } from '../actions/ApiAC';

const INITIAL_STATE = {
  loading: false,
  meals: [],
  drinks: [],
  error: null,
};

function foodsAndDrinks(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST_API:
    return { ...state, loading: true };

  case MEALS_API_SUCCESS:
    return {
      ...state,
      loading: false,
      meals: action.mealsArray,
      drinks: [],
      error: null,
    };

  case DRINKS_API_SUCCESS:
    return {
      ...state,
      loading: false,
      drinks: action.drinksArray,
      meals: [],
      error: null,
    };

  case API_ERROR:
    return {
      ...state,
      loading: false,
      error: action.errorMsg,
    };

  default:
    return state;
  }
}

export default foodsAndDrinks;
