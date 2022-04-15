import {UPDATE_FIELD, ADD_MESSAGE, CHECK_SETTINGS, SUBMIT_LOGIN, CONNECT_USER } from 'src/actions/chat';
import { getNextId } from 'src/utils';

const initialState = {
  messages: [
    {
      id: 1,
      username: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      username: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      username: 'Super Chat',
      content: 'Stp',
    },
  ],
  // contenu de l'input pour saisir un message
  inputMessage: '',
  inputEmail: '',
  inputPassword:'',
  // pseudo de l'utilisateur
  nickname: 'Super Chat',
  openSetting: false,
};

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        nickname: action.nickname,
        openSetting: false,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
      };

    case UPDATE_FIELD:
      if(action.identifier === 'email') {
        return {
          ...state,
          inputEmail: action.value,
        };

      } else if(action.identifier === 'message') {
        return {
          ...state,
          inputMessage: action.value,
        };
        
      } else if(action.identifier === 'password') {
        return {
          ...state,
          inputPassword: action.value,
      };
    } 
      return {
        ...state,
      };

    case ADD_MESSAGE: {
      // construire un nouveau message
      const newMessage = {
        id: getNextId(state.messages),
        username: state.nickname,
        content: state.inputMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],

        // on en profite pour vider l'input
        inputMessage: '',
      };
    }
    
    case CHECK_SETTINGS:
      if(state.openSetting) {
        return {
          ...state,
            openSetting: false,
          }
        } else {
          return {
          ...state,
            openSetting: true,
        }
      }

    default:
      return state;
  }
}

export default chatReducer;
