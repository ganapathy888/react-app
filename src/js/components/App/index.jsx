// Vendor Imports
import React from 'react';

// Local Imports
import ReactLogo from '../../../images/react-logo.svg';

// App Component
export default () => (
  <div className="container p-5">
    <div className="jumbotron">
      <h1 className="display-4">
        <img src={ReactLogo} alt="React Logo" width="100" height="100" />
        <span className="ml-2">React App</span>
      </h1>
      <hr className="my-4" />
      <p>
        You can remove this component from here <code>/src/js/components/App</code>.
      </p>
    </div>
  </div>
);
