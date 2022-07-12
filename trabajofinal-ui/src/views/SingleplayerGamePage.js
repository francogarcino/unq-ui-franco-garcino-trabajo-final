import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function SingleplayerView() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    const [playerScore, setPlayerScore] = useState(0)
    const [iaScore, setIAScore] = useState(0)

    const [playerOption, setPlayerOption] = useState("")
    const [iaOption, setIAOption] = useState("")

    // { jugador, computadora, tie }
    const [lastWinner, setWinner] = useState("")

    const resetMatch = () => {
        setPlayerScore(0)
        setIAScore(0)
        setPlayerOption("")
        setWinner("")
        console.log("Match reseted successfully");
    }

    useEffect(() => {
        if (iaOption && playerOption) {
            if (playerOption === iaOption) { setWinner("tie") }
            else if (
                (playerOption === "rock" && (iaOption === "scissors" || iaOption === "lizard")) ||
                (playerOption === "paper" && (iaOption === "rock" || iaOption === "spock")) ||
                (playerOption === "scissors" && (iaOption === "paper" || iaOption === "lizard")) ||
                (playerOption === "lizard" && (iaOption === "paper" || iaOption === "spock")) ||
                (playerOption === "spock" && (iaOption === "rock" || iaOption === "scissors"))
            ) {
                setWinner("jugador")
                setPlayerScore(playerScore + 1)
            }
            else {
                setWinner("computadora")
                setIAScore(iaScore + 1)
            }
            resetSelection()
        }
    }, [iaOption])

    const resetSelection = () => setPlayerOption("")

    const playTurn = () => {
        setIAOption(["rock", "paper", "scissors", "lizard", "spock"][Math.floor(Math.random() * 5)])
    }

    return (
        <div className="c-text-container">
            <p className="title">Partida contra la IA</p>
            <div className="game-container">
                <div className="game-zone">
                    <div className="card-container">
                        <div className="option-card" onClick={() => setPlayerOption("rock")}>
                            <p>Piedra</p>
                            <img src={require('../assets/rock-card-img.png')} alt="piedra" />
                        </div>
                        <div className="option-card" onClick={() => setPlayerOption("paper")}>
                            <p>Papel</p>
                            <img src={require('../assets/paper-card-img.png')} alt="papel" />
                        </div>
                        <div className="option-card" onClick={() => setPlayerOption("scissors")}>
                            <p>Tijera</p>
                            <img src={require('../assets/scissors-card-img.png')} alt="tijeras" />
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="option-card" onClick={() => setPlayerOption("lizard")}>
                            <p>Lagarto</p>
                            <img src={require('../assets/lizard-card-img.png')} alt="lagarto" />
                        </div>
                        <div className="option-card" onClick={() => setPlayerOption("spock")}>
                            <p>Spock</p>
                            <img src={require('../assets/spock-card-img.png')} alt="spock" />
                        </div>
                    </div>
                </div>
                <div className="game-buttons-container">
                    {
                        playerOption ?
                            <div className="game-button buttons" onClick={playTurn}> Jugar turno </div>
                            :
                            <div className="game-button disable-button"> Esperando seleccion... </div>
                    }
                    <div className="game-button buttons" onClick={resetMatch}>Reiniciar partida</div>
                    <div className="game-button buttons" onClick={goToHome}>Volver al menu principal</div>
                    <div className="score-container">
                        <p>Jugador: {playerScore}</p>
                        <p>Computadora: {iaScore}</p>
                    </div>
                    <div>
                        {lastWinner === "tie" ? <p>La ultima mano termino en empate</p> 
                            : lastWinner ? <p>El ultimo ganador fue {lastWinner}</p>
                                : <p>No se jugo ninguna mano</p>}
                    </div>
                    <div>
                        {lastWinner ? 
                        <div>
                            <p>La ultima eleccion de la IA fue:</p> 
                            <img src={require(`../assets/${iaOption}-card-img.png`)} />
                        </div>
                        : <p></p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
