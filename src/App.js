import React from "react";

const App = ({ player1, player2, server1, handleIncrement1, handleIncrement2, handleReset, winner }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={ server1 ? "card text-center bg-dark text-white" : "card text-center"}>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-success" onClick={ handleIncrement1 }>+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={ server1 ? "card text-center" : "card text-center bg-dark text-white"}>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-success" onClick={ handleIncrement2 }>+</button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        { winner ? <h2 className="alert alert-success">{ winner ? (player1 === 21 ? "Player 1 wins!" : "Player 2 wins!" ) : null }</h2> : null }

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;
