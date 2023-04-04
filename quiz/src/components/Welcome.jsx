const Welcome = (props) => {


    return (
        <section>
            <h2>Välkommen till denna Quiz!</h2>
            <p>Vill du sätt igång?</p>
            <button onClick={props.nextScreen}>Ja!</button>
        </section>
    )
}

export default Welcome;