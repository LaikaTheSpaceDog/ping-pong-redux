import React from "react";
import translation from "../../data/translations.json";

const Winner = ({ winner, player1Name, player2Name, language }) => {

    return (
        <>
            { winner ? <h2 className="alert alert-success">{ winner === 1 ? `${player1Name} ${translation[language]["Wins!"]}` : `${player2Name} ${translation[language]["Wins!"]}` }</h2> : null }
        </>
    );

}

export default Winner;