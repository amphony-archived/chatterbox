import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/pages/Landing';
import Login from './components/layout/Login';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div className="App App-header">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
