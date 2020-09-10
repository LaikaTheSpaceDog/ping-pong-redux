import React from "react";

const Language = ({ handleLanguageEnglish, handleLanguageRussian }) => {

    return (
        <>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                
                <button onClick={ handleLanguageEnglish }>Eng</button>
                <button onClick={ handleLanguageRussian }>Rus</button>
                {/* <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autoComplete="off" onClick={ handleLanguage } defaultChecked /> Eng
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option1" autoComplete="off" onClick={ handleLanguage } defaultChecked /> Rus
                </label> */}
            </div>
        </>
    );

}

export default Language;