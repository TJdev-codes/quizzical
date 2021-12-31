import React from "react"
import './App.css'
import Welcome from "./Welcome"
import Questions from "./Questions"
import Answer from "./Answer"
import {nanoid} from "nanoid"

export default function App() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [questions, setQuestions] = React.useState([])

    const jumbleAnswers = props.questions.map(element => {
    const correctAnswer = element.correct.response
    const incorrectAnswers = element.wrong.map(answer => answer.answer)
    const allAnswers = incorrectAnswers.concat(correctAnswer)
    const mixedAnswers = allAnswers.sort(() => Math.random() - 0.5)

    const answerButtons = mixedAnswers.map(answer => <button style={styles}>{answer}</button>)

        return <div>
                    <div>{element.question}</div>
                    {answerButtons}
                    <hr></hr>
            </div>
    })

    function getAnswers(mixedAnswers, correctAnswer){
        return mixedAnswers.map(answer => {
            return ({
                isCorrect: answer === correctAnswer ? true : false,
                answer: answer,
                id : nanoid(),
            })
        })
    }


    React.useEffect(() => {
       fetch("https://opentdb.com/api.php?amount=5&category=22&type=multiple")
            .then(res => res.json())
            .then(data => {
                props.setQuestions(data.results)
            })
    }, [0])

    function handleClick() {
        setShowQuiz(prevVal => !prevVal)
    }

    return(
        <div>
            {!showQuiz && <Welcome handleClick={handleClick}/>}
            {showQuiz && <Questions questions={questions} setQuestions={setQuestions} />}
        </div>
    )
}