import React from "react";

const Winner = ({ winner }) => {

    return (
        <>
            { winner ? <h2 className="alert alert-success">{ winner === 1 ? "Player 1 Wins!" : "Player 2 Wins!" }</h2> : null }
        </>
    );

}

export default Winner;