// === action types
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const CHECK_SETTINGS = 'CHECK_SETTINGS';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// intention : gérer une authentification réussie
export const CONNECT_USER = 'CONNECT_USER';

// === action creators
export const updateField = (value, identifier) => ({
  type: UPDATE_FIELD,
  value: value,
  identifier: identifier,
})

export const addMessage = () => ({
  type: ADD_MESSAGE,
});


export const settingsValue = () => ({
  type: CHECK_SETTINGS,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (nickname) => ({
  type: CONNECT_USER,
  nickname: nickname,
});
