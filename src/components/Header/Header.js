import React from "react";
import Language from "../Language";
import translation from "../../data/translations.json";

const Header = ({ language }) => {

    return(
        <>
            <Language />
            <header className="jumbotron mt-4 mb-0">
                <h1>{ translation[language]["Ping-Pong"] }</h1>
            </header>
        </>
    );

}

export default Header;