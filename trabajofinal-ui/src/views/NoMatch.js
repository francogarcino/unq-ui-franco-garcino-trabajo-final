import React from "react";
import "../styles/GeneralStyles.css"
import "../styles/NoMatch.css"

export default function NoMatch() {
    return(
        <div className="c-text-container">
            <p className="title"> Ups... esto no estaba dentro de los planes </p>
            <img className="error-img" src={require('../assets/noMatch-img.jpg')} alt="Failure Image" />
            <p> Probablemente estes sobre un path que no esta definido </p>
        </div>
    )
}