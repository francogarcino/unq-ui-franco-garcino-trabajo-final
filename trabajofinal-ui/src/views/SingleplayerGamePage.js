import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function SingleplayerView() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    const [playerScore, setPlayerScore] = useState(0)
    const [iaScore, setIAScore] = useState(0)
    const [selection, setOption] = useState("")
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
                        <div className="option-card" onClick={() => setOption("rock")}>
                            <img src={require('../assets/rock-card-image.png')} alt="piedra" />
                        </div>

                        <div className="option-card" onClick={() => setOption("paper")}>
                            <img src={require('../assets/paper-card-img.png')} alt="papel" />
                        </div>

                        <div className="option-card" onClick={() => setOption("scissors")}>
                            <img src={require('../assets/scissors-card-img.png')} alt="tijeras" />
                        </div>

                        <div className="option-card" onClick={() => setOption("lizard")}>
                            <img src={require('../assets/lizard-card-img.png')} alt="lagarto" />
                        </div>

                        <div className="option-card" onClick={() => setOption("spock")}>
                            <img src={require('../assets/spock-card-img.png')} alt="spock" />
                        </div>
                    </div>
                </div>
                <div className="game-buttons-container">
                    {
                        selection ?
                            <div className="game-button buttons" onClick={() => console.log("ejecutando jugada")}> Jugar turno </div>
                            :
                            <div className="game-button disable-button"> Esperando seleccion... </div>
                    }
                    <div className="game-button buttons" onClick={resetScore}>Reiniciar contador</div>
                    <div className="game-button buttons" onClick={goToHome}>Volver al menu principal</div>
                    <div className="score-container">
                        <p>Jugador: {playerScore}</p>
                        <p>Computadora: {iaScore}</p>
                    </div>
                    <div>
                        {lastWinner ? <p>El ultimo ganador fue {lastWinner}</p> : <p>No se jugo ninguna mano todavia</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

function iaSelection() {
    const ops = ["piedra", "papel", "tijera", "lagarto", "spock"]
    return (ops[Math.floor(Math.random() * 5)])
}