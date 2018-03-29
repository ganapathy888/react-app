// Vendor Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Local Imports
import Routes from './js/routes';
import store from './js/store';

// Render
class App extends Component {
  // Static
  static formatErrors(error) {
    return error.split('   ');
  }

  // Component Life Cycle
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error, info });
  }

  // Render
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '15px' }}>
          <h1>Something went wrong!</h1>
          <pre style={{ color: 'red' }}>{App.formatErrors(this.state.error.stack)}</pre>
          <pre style={{ color: 'red' }}>{this.state.info.componentStack}</pre>
        </div>
      );
    }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
