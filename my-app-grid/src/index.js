import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Styles/Navbar.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import storeFactory from './Redux-data/store'

//Storefactory is a function now, and needs to be executed
const reduxStore = storeFactory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
