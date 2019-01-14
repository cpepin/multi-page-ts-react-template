import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
