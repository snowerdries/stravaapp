import fetch from './fetch';

const authenticationHelper = {
  isLoggedIn: async () => {
    let loggedIn = null;

    const resp = await fetch('/user/loggedin', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    loggedIn = await resp.json();

    loggedIn = loggedIn.googleId ? loggedIn : null;

    return loggedIn;
  },
};

export default authenticationHelper;
