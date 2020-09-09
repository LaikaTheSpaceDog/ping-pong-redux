import React from "react";

const Table = ({ previousGames, handleClear }) => {

    return previousGames.length === 0 ? null : (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player 1</th>
                        <th scope="col">Player 2</th>
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
            <button className="btn btn-danger" onClick={ handleClear }>New Game</button>
        </>
    );

}

export default Table;