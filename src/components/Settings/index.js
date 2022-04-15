import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Settings = ({ openSetting, inputEmail, inputPassword, settings, updateField, submitLogin }) => {
  return (
    <form className="settings" 
    onSubmit={(evt) => {
      evt.preventDefault();
      submitLogin();
    }}>

      <input
        className="form-input"
        type="button"
        value="x"
        onClick={() => {
          settings();
        }}
      />

      {openSetting && 
        <>
        <input type="email" className="input-email" placeholder="email" value={inputEmail}
          onChange={(event) => {
            // console.log(event.currentTarget.value);
            updateField(event.currentTarget.value, 'email');
          }} />

        <input type="password" className="input-password" placeholder="Mots de passe" value={inputPassword}
          onChange={(event) => {
            updateField(event.currentTarget.value, 'password');
          }} />

        <input type="submit" className="input-submit" value="Envoyer"/>
        </>
      }
    </form>
  );
}

Settings.propsTypes = {
  openSetting: PropTypes.bool.isRequired,
  inputEmail: PropTypes.string.isRequired,
  inputPassword: PropTypes.string.isRequired,
  settings: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
}

export default Settings;
