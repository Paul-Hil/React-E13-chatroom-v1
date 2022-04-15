import React from 'react';
import PropTypes from 'prop-types';
// https://www.npmjs.com/package/react-feather
// https://bit.dev/feathericons/react-feather
import { Send } from 'react-feather';

import './form.scss';


const Form = ({ value, updateField, addMessage }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();

      addMessage();
    }}
  >
    <input
      className="form-input"
      type="text"
      value={value}
      onChange={(event) => {
        updateField(event.currentTarget.value, 'message');
      }}
    />
    <button type="submit" className="form-submit">
      <Send size={48} />
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default Form;
