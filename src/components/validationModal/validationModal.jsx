import React from "react";

function ValidationModal({message}) {
    return (
        <>
            <h3>Validation Message</h3>
            <p>{message.title}</p>
        </>
    );
}

export default ValidationModal;
