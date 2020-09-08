import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 } 
        server1={ state.server1 }
        winner={ state.winner }
        previousGames={ state.previousGames }
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
