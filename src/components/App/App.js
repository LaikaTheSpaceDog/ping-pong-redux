import React from "react";
import Header from "../Header";
import Winner from "../Winner";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Reset from "../Reset";
import Table from "../Table";
import Settings from "../Settings"

const App = ({ submitted }) => (
    <React.Fragment>
        <Header />
        {!submitted ? <Settings /> : (
            <>
                <div className="row mb-4">
                    <Player1 />
                    <Player2 />
                </div>
                <Winner />
                <hr />
                <Reset />
                <Table />
            </>
        )}
    </React.Fragment>
);

export default App;
