import React from "react"
import './TipButton.css'

interface ButtonProps {
    value: number
}

const TipButton = ({value}: ButtonProps) => {
    return <div className="tip-button">{value}%</div>
}

export default TipButton