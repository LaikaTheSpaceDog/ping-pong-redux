import React from "react";

const Reset = ({ handleReset }) => {

    return(
        <>
            <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
        </>
    );

}

export default Reset;