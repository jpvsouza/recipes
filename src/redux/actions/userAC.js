export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';

const setLoginInfoAC = (userMail, userPassword) => ({
  type: SET_LOGIN_INFO,
  userMail,
  userPassword,
});

export default setLoginInfoAC;
