import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Scores from "./components/Scores";
import Reset from "./components/Reset";

const App = ({ player1, player2, server1, handleIncrement1, handleIncrement2, handleReset, winner }) => (
    <React.Fragment>
        <Header />
        <div className="row mb-4">
            <Scores 
                server1={ server1 } 
                handleIncrement={ handleIncrement1 }
                name="Player 1"
                player={ player1 }
            />
            <Scores 
                server1={ server1 } 
                handleIncrement={ handleIncrement2 }
                name="Player 2" 
                player={ player2 }       
            />
        </div>
        <Winner 
            winner={ winner } 
            player1={ player1 } 
        />
        <hr />
        <Reset 
            handleReset={ handleReset } 
        />
    </React.Fragment>
);

export default App;
