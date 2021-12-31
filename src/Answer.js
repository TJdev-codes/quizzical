import React from "react"
import "./App.css"

export default function Answer(props) {
    let answerStyle;

    switch(answerStyle) {
        case 0:
            answerStyle = "checked-class";
            break;
        case 1:
            answerStyle = "green-class";
            break;
        case 2:
            answerStyle = "red-class";
            break;
        default:
            answerStyle = "default-class";
            break;
    }

    return (
        <div className="answer" style={answerStyle}>
            {props.answer}
        </div>
    )
}