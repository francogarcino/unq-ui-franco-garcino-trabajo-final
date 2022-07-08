import React from "react";
import "../styles/Card.css"

export default function OptionMiniCard({ option, img }) {
    return (
        <div className="option-card">
            <div>{option}</div>
            <img src={img} alt={option} />
        </div>
    )
}