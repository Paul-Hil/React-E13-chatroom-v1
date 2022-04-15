import { connect } from 'react-redux';

// on importe le composant de présentation
import Settings from 'src/components/Settings';

import { settingsValue, updateField, submitLogin } from '../../actions/chat';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  openSetting: state.openSetting,
  inputEmail: state.inputEmail,
  inputPassword: state.inputPassword,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  settings: () => {
    dispatch(settingsValue());
  },

  updateField: (value, identifier) => {
    dispatch(updateField(value, identifier));
  },


  submitLogin: () => {
    dispatch(submitLogin());
  }
});



// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
