import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Players from "./components/Players";
import Reset from "./components/Reset";
import Table from "./components/Table";

const App = ({ player1, player2, server1, handleIncrement1, handleIncrement2, handleReset, winner, handleSave, previousGames }) => (
    <React.Fragment>
        <Header />
        <Players 
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
        <Table 
            previousGames={ previousGames }
        />
    </React.Fragment>
);

export default App;
