import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function HomeView() {
    const navigate = useNavigate()
    const playVsIA = () => navigate('/game')
    const showHelp = () => navigate('/help')

    return(
        <div className="home-container">
            <p className="title">Piedra, Papel, Tijera, Lagarto, Spock</p>
            <div>
                <div className="home-button buttons" onClick={playVsIA}>
                    Jugar contra la IA
                </div>
                <div className="home-button buttons" onClick={showHelp}>
                    Ayuda sobre el juego
                </div>
            </div>
        </div>
    )
}