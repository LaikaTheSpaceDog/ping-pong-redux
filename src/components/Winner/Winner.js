import React from "react";

const Winner = ({ winner, player1Name, player2Name }) => {

    return (
        <>
            { winner ? <h2 className="alert alert-success">{ winner === 1 ? `${player1Name} Wins!` : `${player2Name} Wins!` }</h2> : null }
        </>
    );

}

export default Winner;