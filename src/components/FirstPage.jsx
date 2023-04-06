import { useState } from "react"


const FirstPage =()=>{

const [theDaysName,setTheDaysName] = useState();

let thisDay = new Date(dateString).toLocaleString('en-us', {weekday:'long'})

console.log(thisDay);


    return(
<div>

<p>{thisDay}</p>


</div>





    )
}

export default FirstPage