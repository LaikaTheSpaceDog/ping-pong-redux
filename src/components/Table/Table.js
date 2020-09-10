import React from "react";
import translation from "../../data/translations.json";

const Table = ({ previousGames, handleClear, language, player1Name, player2Name }) => {

    return previousGames.length === 0 ? null : (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{ player1Name }</th>
                        <th scope="col">{ player2Name }</th>
                    </tr>
                </thead>
                <tbody>
                    { previousGames.map((game, index) => (
                        <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ game.player1.score }</td>
                            <td>{ game.player2.score }</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            <button className="btn btn-danger" onClick={ handleClear }>{ translation[language]["New Game"] }</button>
        </>
    );

}

export default Table;