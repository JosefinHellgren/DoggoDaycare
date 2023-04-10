import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

 //get all the dogs that are present
    //get the list of today.
const FirstPage =(props)=>{
    const [showPresent, setShowPresent] = useState(true);
    const { monday, tuesday, wednesday, thursday, friday } = props.schedule;
    const [currentDayList,setcurrentDayList]=useState([])
    console.log(props.dogData)


const [theDaysName,setTheDaysName] = useState();





    const filteredDogs = props.dogData.filter(dog => dog.present === showPresent);
    console.log(filteredDogs);









const today = new Date();

let daysOfTheWeek = ["sunday","monday","tuesday","wednesday","thursday","friday", "saturday"][today.getDay()];


console.log(daysOfTheWeek);
   

console.log(currentDayList)



useEffect(()=>{

switch(daysOfTheWeek){

case "monday":
    setcurrentDayList(monday)

break;

case "tuesday":
    setcurrentDayList(tuesday)
break;

case "wednesday":
    setcurrentDayList(wednesday)
break;

case "thursday":
    setcurrentDayList(thursday)
    

break;

case "friday":
    setcurrentDayList(friday)

break;

default:

}

},[])




    return(

       
<div className="firstpage">
    
    <div id="present-dog-container">
    {filteredDogs.map(dog  => (
            <div id="dogContainer">
            <li  key={dog.name}>
                <Link to="/specialdog">
              <img onClick={()=>props.onUpdateData(dog)} id="dogImage" src={dog.img} alt="" /> 
              </Link>
            </li>
            </div>
          ))}
    </div>


<h1 id="firstpageDay">{daysOfTheWeek}</h1>







<div id="present-todays">
    {currentDayList.map(day  => (
           
            <li  key={day}>
               {day}
            
            </li>
            
          ))}
    </div>
</div>





    )
}

export default FirstPage