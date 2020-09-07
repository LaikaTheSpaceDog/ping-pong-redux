import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  server1: true
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, server1: (state.player1 + state.player2) % 5 === 0 ? !state.server1 : state.server1 });

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_PLAYER_1": return server(player1(state));
    case "INCREMENT_PLAYER_2": return server(player2(state));
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(reducer, initial);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 } 
        server1={ state.server1 }
        handleIncrement1={ () => store.dispatch({ type: "INCREMENT_PLAYER_1" }) }
        handleIncrement2={ () => store.dispatch({ type: "INCREMENT_PLAYER_2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
      />
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
