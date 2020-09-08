import React from "react";

const Table = ({ previousGames }) => {

    return(
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
    );

}

export default Table;