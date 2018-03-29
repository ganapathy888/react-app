// Vendor Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Local Imports
import App from '../components/App';

// Not Found Component
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

// Route Configuration
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

// Export
export default Routes;
