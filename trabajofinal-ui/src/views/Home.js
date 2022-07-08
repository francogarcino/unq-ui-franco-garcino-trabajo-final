import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function Home() {
    const navigate = useNavigate()
    const playVsIA = () => navigate('/game')
    const showHelp = () => navigate('/help')

    return(
        <div className="home-container">
            <p className="title">Piedra, Papel, Tijera, Lagarto, Spock</p>
            <div className="button-container">
                <div className="home-button" onClick={playVsIA}>
                    Play Against IA
                </div>
                <div className="home-button" onClick={showHelp}>
                    Help About Game
                </div>
            </div>
        </div>
    )
}