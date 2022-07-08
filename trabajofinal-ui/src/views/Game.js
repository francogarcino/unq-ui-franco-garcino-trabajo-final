import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GeneralStyles.css"

export default function Game1P() {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    return (
        <div className="home-container">
            <p className="title">Game Screen</p>
            <div className="game-container">
                <div className="game-zone">
                    Cartas con las opciones
                </div>
                <div className="game-buttons-container">
                        <div className="home-button">Select</div>
                        <div className="home-button">Play</div>
                        <div className="home-button">Reset</div>
                        <div className="home-button" onClick={goToHome}>Go home</div>
                    <div className="score">
                        py - ia
                    </div>
                </div>
            </div>
        </div>
    )
}