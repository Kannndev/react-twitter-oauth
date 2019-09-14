import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AppRouter from './App.router';
import './App.css';
import reducer from './store/reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AppRouter />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
