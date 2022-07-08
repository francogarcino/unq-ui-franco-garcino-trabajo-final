import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function InfoView() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    return (
        <div className="home-container">
            <p className="title"> Información </p>
            <p className="mid-text"> ¿Cuales son las reglas para este juego? Es muy simple: </p>
            <div className="sticky-note c-text-container">
                <p> Tijeras cortan Papel </p>
                <p> Papel cubre Piedra </p>
                <p> Piedra aplasta Lagarto </p>
                <p> Lagarto envenena Spock </p>
                <p> Spock rompe Tijeras </p>
                <p> Tijeras decapitan Lagarto </p>
                <p> Lagarto come Papel </p>
                <p> Papel desautoriza Spock </p>
                <p> Spock vaporiza Piedra </p>

                <p> y, como siempre ha sido, Piedra rompe Tijeras </p>
            </div>
            <div className="home-button buttons" onClick={goToHome}>Volver al menu principal</div>
        </div>
    )
}