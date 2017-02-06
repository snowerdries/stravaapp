/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loggedin.css';
import Link from '../../components/Link';

class Home extends React.Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>LOGGEDIN</h1>
          <Link className={s.link} to="/">
            <button>OK</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
