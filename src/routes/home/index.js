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
import Layout from '../../components/Layout';
import authenticationHelper from '../../core/authenticationHelper';

export default {

  path: '/',

  async action() {
    const loggedInUser = await authenticationHelper.isLoggedIn();
    if (!loggedInUser) {
      return { redirect: '/login' };
    }

    return {
      title: 'React Starter Kit',
      component: <Layout><Home user={loggedInUser} /></Layout>,
    };
  },
};
