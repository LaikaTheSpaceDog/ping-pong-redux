import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_PLAYER_1": return { ...state, player1: state.value + 1 };
    case "INCREMENT_PLATER_2": return { ...state, player2: state.value + 1 };
    default: return state;
  }
};

const store = createStore(reducer, initial);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App player1={ state.player1 } player2={ state.player2 } />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
