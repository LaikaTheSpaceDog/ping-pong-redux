import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner/";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Reset from "./components/Reset/";
import Table from "./components/Table/";

const App = () => (
    <React.Fragment>
        <Header />
        <div className="row mb-4">
            <Player1 />
            <Player2 />
        </div>
        <Winner />
        <hr />
        <Reset />
        <Table />
    </React.Fragment>
);

export default App;
