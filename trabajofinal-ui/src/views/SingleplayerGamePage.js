import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionMiniCard from "../components/OptionCard";
import "../styles/GeneralStyles.css"

export default function SingleplayerView() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    const [playerScore, setPlayerScore] = useState(0)
    const [iaScore, setIAScore] = useState(0)
    const [lastWinner, setWinner] = useState("")

    const resetScore = () => {
        setPlayerScore(0)
        setIAScore(0)
        console.log("Score reseted successfully");
    }

    return (
        <div className="c-text-container">
            <p className="title">Partida contra la IA</p>
            <div className="game-container">
                <div className="game-zone">
                    <div className="card-container">
                        <OptionMiniCard key={"Piedra"} option={"Piedra"} img={require("../assets/rock-card-image.png")} />
                        <OptionMiniCard key={"Papel"} option={"Papel"} img={require("../assets/paper-card-img.png")} />
                        <OptionMiniCard key={"Tijera"} option={"Tijera"} img={require("../assets/scissors-card-img.png")} />
                        <OptionMiniCard key={"Lagarto"} option={"Lagarto"} img={require("../assets/lizard-card-img.png")} />
                        <OptionMiniCard key={"Spock"} option={"Spock"} img={require("../assets/spock-card-img.png")} />
                    </div>
                </div>
                <div className="game-buttons-container">
                    <div className="game-button buttons">Jugar turno</div>
                    <div className="game-button buttons" onClick={resetScore}>Reiniciar contador</div>
                    <div className="game-button buttons" onClick={goToHome}>Volver al menu principal</div>
                    <div className="score-container">
                        <p>Jugador: {playerScore}</p>
                        <p>Computadora: {iaScore}</p>
                    </div>
                    <div>
                        {lastWinner ? <p>El ultimo ganador fue {lastWinner}</p> : <p>Esperando jugada...</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}