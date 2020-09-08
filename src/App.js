import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Scores from "./components/Scores";
import Reset from "./components/Reset";

const App = ({ player1, player2, server1, handleIncrement1, handleIncrement2, handleReset, winner }) => (
    <React.Fragment>
        <Header />
        <Scores 
            player1={ player1 }
            player2={ player2 }
            server1={ server1 }
            handleIncrement1={ handleIncrement1 }
            handleIncrement2={ handleIncrement2 }
            winner={ winner }
        />
        <Winner 
            winner={ winner } 
            player1={ player1 }
            player2={ player2 } 
        />
        <hr />
        <Reset 
            handleReset={ handleReset } 
        />
    </React.Fragment>
);

export default App;
