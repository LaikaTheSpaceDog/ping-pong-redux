import React from "react";
import Score from "./Score";

const Scores = ({ player1, player2, server1, handleIncrement1, handleIncrement2 }) => {

    return(
        <>
            <div className="row mb-4">
                <Score 
                    server1={ server1 } 
                    handleIncrement={ handleIncrement1 }
                    name="Player 1"
                    player={ player1 }
                />
                <Score 
                    server1={ !server1 } 
                    handleIncrement={ handleIncrement2 }
                    name="Player 2" 
                    player={ player2 }   
                />
            </div>
        </>
    );

}

export default Scores;