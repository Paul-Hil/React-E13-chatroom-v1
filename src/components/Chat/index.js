// == Import npm
import React from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings'

import './styles.scss';

// == Composant
const Chat = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chat;
