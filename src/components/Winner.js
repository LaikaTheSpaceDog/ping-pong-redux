import React from "react";

const Winner = ({ winner, player1, player2 }) => {

    return(
        <>
            { winner ? <>
                            <h2 className="alert alert-success">{ winner ? (player1 > player2 ? "Player 1 wins!" : "Player 2 wins!" ) : null }</h2>
                       </> : null }
        </>
    );

}

export default Winner;