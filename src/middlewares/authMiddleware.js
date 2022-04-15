
import axios from 'axios';

import { SUBMIT_LOGIN, connectUser } from 'src/actions/chat';

// triple fléchée : c'est un peu comme si on avait 3 paramètres à notre disposition
// - store : le store
// - next : une fonction qui permet de "passer l'action au suivant"
// - action : l'action qui vient d'arriver au store
const authMiddleware = (store) => (next) => (action) => {
  // console.log('on est dans le middleware, action:', action);

  if (action.type === SUBMIT_LOGIN) {
    console.log('on va envoyer la requête');

    // on va piocher dans le state les infos nécessaires
    const { inputEmail, inputPassword } = store.getState();

    axios.post(
      // URL
      'http://localhost:3001/login',
      // paramètres
      {
        email: inputEmail,
        password: inputPassword,
      },
    )
      .then((response) => {
        store.dispatch(connectUser(response.data.pseudo));
      })

      .catch((error) => {
        console.log(error);
      });
  }

  // on passe l'action au suivant : le middleware suivant s'il y en un, sinon le
  // reducer
  next(action);
};

export default authMiddleware;
