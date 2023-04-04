

const Result = (props)=>{




    return(
        <section>
            <h2>Resultat</h2>
            <p>du fick: {props.score}  rätta svar.</p>
            <button onClick={props.restartQuiz}>Spela igen</button>

        </section>
    )
}
export default Result;