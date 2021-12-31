import React from "react"
import Answer from "./Answer"

export default function Questions(props) {


    


const questionElements = props.questions.map(category => <div>{category.question}</div>)

    return (
        <main>
            {questionElements}
        </main>
    )
}