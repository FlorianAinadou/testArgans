import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';
import {createStore} from 'redux';
import allReducers from './reducers' 
import {Provider} from 'react-redux';


// Store
const store= createStore(allReducers);

ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

