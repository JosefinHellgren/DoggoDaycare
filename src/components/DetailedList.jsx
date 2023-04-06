




function DetailedList(props) {



    const updateView = () => {

        props.data;
    };

    return (
        <div>
            <div id="dogPresentation">


                <p>{props.data.name}</p>
                <img id="BigdogImage" src={props.data.img} alt="" />
            </div>

            <div id="textContainer">

                <li>Breed: {props.data.breed}</li>
                <li>Sex:  {props.data.sex} </li>
                <li>Age: {props.data.age}</li>
                <li>Chip:  {props.data.chipNumber}</li>
                <li>Present: {props.data.present ? " here" : " not here"}</li>
                <li>Owner: {props.data.owner.name} {props.data.owner.lastName}</li>
                <li>Phone: {props.data.owner.phoneNumber}</li>

            </div>






        </div>
    );
}

export default DetailedList;