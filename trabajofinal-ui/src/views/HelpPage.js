import React from "react";
import "../styles/GeneralStyles.css"

export default function Help() {
    return (
        <div>
            <p className="title">Help</p>
            <p className="text">
                ¿Cuales son las reglas para este juego?
                Es muy simple:
                <ul>
                    <li>Tijeras corta Papel</li>
                    <li>Papel cubre Piedra</li>
                    <li>Piedra aplasta Lagarto</li>
                    <li>Lagarto envenena Spock</li>
                    <li>Spock rompe Tijeras</li>
                    <li>Tijeras decapitan Lagarto</li>
                    <li>Lagarto come Papel</li>
                    <li>Papel desautoriza Spock</li>
                    <li>Spock vaporiza Piedra</li>
                    <li>Y como siempre a sido, Piedra rompe Tijeras</li>
                </ul>
            </p>
        </div>
    )
}