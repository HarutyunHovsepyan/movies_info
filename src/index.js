import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));


const combaineCompase = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, combaineCompase(applyMiddleware(thunk)))


root.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
);


