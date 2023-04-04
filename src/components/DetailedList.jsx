
const DetailedList = (props)=>{



    const updateView=()=>{

        props.data
    }

    return(
        <div>
       
                <li className="BiglistItem" key={props.data.name}>
                    
                <img id="BigdogImage" src={props.data.img} alt="" />
                    <div id="bigtextInList"> Name:  {props.data.name}  Breed:  {props.data.breed} Sex:  {props.data.sex}  Age: {props.data.age}  Chip:  {props.data.chipNumber} Present: {props.data.present? " here" : " not here"} Owner: {props.data.owner.name}
                </div>
               
                
               
                </li>
               
           
          </div>
    )
}

export default DetailedList;