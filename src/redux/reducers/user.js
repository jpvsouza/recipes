import { SET_LOGIN_INFO } from '../actions/userAC';

const INITIAL_STATE = {
  userMail: '',
  userPassword: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_INFO:
    return {
      ...state,
      userMail: action.userMail,
      userPassword: action.userPassword,
    };

  default:
    return state;
  }
}

export default user;
