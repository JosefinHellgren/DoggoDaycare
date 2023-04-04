import { useState } from "react";

const Game = (props) => {
    const questions = getQuestions();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer]= useState(null);

 
    let question = questions[currentQuestion];

    console.log(question.answers);

    const handleFinalAnswer = () =>{
        if(selectedAnswer=== question.correct){
            console.log("rätt")
            props.answeredCorrectly();
        }
            if (currentQuestion < questions.length-1){
                setCurrentQuestion(currentQuestion +1);
            }else{
                //go to results
                props.showResult();
            }
       
    }

    const options = question.answers.map((answer, index) => (
            <p className="option" key={index}>
                <label>
                    <input type="radio" name="question" onClick={()=>setSelectedAnswer(index)}/> {answer}
                </label>
            </p>
        )
    )    

    console.log(options);

    return (
        <section>
            <h3>{question.question}</h3>
            {options}
            <button onClick={handleFinalAnswer}>Answer</button>
        </section>
    )
}

const getQuestions = () => {
    return [
        {
            question: 'När är Julafton?',
            answers: ['24 maj', '24 dec', '3 maj' ],
            correct: 1
        },
        {
            question: 'Vilket är sista datum för inlämningsuppgiften?',
            answers: ['24 maj', '24 dec', '14 april' ],
            correct: 2
        },
        {
            question: 'Vad är bäst?',
            answers: ['Teams', 'Discord', 'Zoom' ],
            correct: 2
        },
        {
            question: 'Vilket är bäst?',
            answers: ['MacOS', 'Windows', 'Linux' ],
            correct: 0
        }
    ]
}



export default Game;