import React from "react";
import translation from "../../data/translations.json";

const Reset = ({ handleReset, language }) => {

    return(
        <button className="btn btn-danger" onClick={ handleReset }>{ translation[language]["Reset"] }</button>
    );

}

export default Reset;