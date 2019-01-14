import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Pulling in es6 versions of react-router
// in order to tree-shake
// @ts-ignore
import Router from 'react-router-dom/es/BrowserRouter';
// @ts-ignore
import Route from 'react-router-dom/es/Route';

import { Details } from './components/Details';
import { Hello } from './components/Hello';

ReactDOM.render(
    <Router>
      <>
        <Route path={'/user'} exact={true} component={Hello} />
        <Route path={'/user/details'} component={Details} />
      </>
    </Router>,
    document.getElementById('root'),
);
