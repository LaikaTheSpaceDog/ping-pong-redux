import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={ store }>
    <App 
      handleIncrement1={ () => store.dispatch({ type: "INCREMENT_PLAYER_1" }) }
      handleIncrement2={ () => store.dispatch({ type: "INCREMENT_PLAYER_2" }) }
      handleReset={ () => store.dispatch({ type: "RESET" }) }
      handleClear={ () => store.dispatch({ type: "CLEAR" }) }
    />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
