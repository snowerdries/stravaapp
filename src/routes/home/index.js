/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import authenticationHelper from '../../core/authenticationHelper';

export default {

  path: '/',

  async action() {
    const isLoggedIn = authenticationHelper.isLoggedIn();
    if (!isLoggedIn) {
      return { redirect: '/login' };
    }

    const resp = await fetch('/user/loggedin', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const json = await resp.json();

    return {
      title: 'React Starter Kit',
      component: <Layout><Home user={json} /></Layout>,
    };
  },
};
