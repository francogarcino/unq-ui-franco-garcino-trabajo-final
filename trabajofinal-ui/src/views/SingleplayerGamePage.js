import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionMiniCard from "../components/OptionCard";
import "../styles/GeneralStyles.css"

export default function SingleplayerView() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    const [playerScore, setPlayerScore] = useState(0)
    const [iaScore, setIAScore] = useState(0)

    const resetState = () => {
        setPlayerScore(0)
        setIAScore(0)
        console.log("Score reseted successfully");
    }

    return (
        <div className="c-text-container">
            <p className="title">Partida contra la IA</p>
            <div className="game-container">
                <div className="game-zone">
                    <OptionMiniCard key={"Piedra"} option={"Piedra"} />
                    <OptionMiniCard key={"Papel"} option={"Papel"} />
                    <OptionMiniCard key={"Tijera"} option={"Tijera"} />
                    <OptionMiniCard key={"Lagarto"} option={"Lagarto"} />
                    <OptionMiniCard key={"Spock"} option={"Spock"} />
                </div>
                <div className="game-buttons-container">
                        <div className="game-button buttons">Elegir opción</div>
                        <div className="game-button buttons">Jugar turno</div>
                        <div className="game-button buttons" onClick={resetState}>Reiniciar contador</div>
                        <div className="game-button buttons" onClick={goToHome}>Volver al menu principal</div>
                    <div className="score-container">
                        <p>Jugador: {playerScore}</p>
                        <p>Computadora: {iaScore}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}