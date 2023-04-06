import { useState } from "react"
import { useEffect } from "react";


const Form = (props) => {
    const [textareaValue, setTextareaValue] = useState("");
    const [dayInputValue, setDayInputValue] = useState("");
    const [timeInputValue, setTimeInputValue] = useState("");
 

    const clearAllInputFields = ()=>{
setDayInputValue("");
setTextareaValue("");
setTimeInputValue("");
    }
  



    return (
        <div id="form">
            <input className="inputFields" type="text" placeholder="day" value={dayInputValue}
                onChange={(event) => setDayInputValue(event.target.value)} />
             <input className="inputFields" type="text" placeholder="time" value={timeInputValue}
                onChange={(event) => setTimeInputValue(event.target.value)} />
            <textarea className="inputFields" name="" id="" cols="30" rows="7" placeholder="activities" value={textareaValue
            } onChange={(event) => setTextareaValue(event.target.value)}></textarea>
            <br/>
            <button id="formButton" onClick={() => {props.createSchedule(dayInputValue, timeInputValue, textareaValue) 
            setDayInputValue("");
            setTimeInputValue("");
            setTextareaValue(""); } } >add to schedule</button> 
        </div>

    )
    
}

const Schedule = () => {
    
        const [monday, setmonday] = useState(
          JSON.parse(localStorage.getItem("monday")) || []
        );
        const [tuesday, settuesday] = useState(
          JSON.parse(localStorage.getItem("tuesday")) || []
        );
        const [wednesday, setwednesday] = useState(
          JSON.parse(localStorage.getItem("wednesday")) || []
        );
        const [thursday, setthursday] = useState(
          JSON.parse(localStorage.getItem("thursday")) || []
        );
        const [friday, setfriday] = useState(
          JSON.parse(localStorage.getItem("friday")) || []
        );
    
   



    const createSchedule = (day,time,text)=>{

        console.log(day,time,text);
        switch(day) {
            case "monday" :
              setmonday([...monday,time+" "+text])
              break;
            case "tuesday" :
              settuesday([...tuesday,time+" "+text])
              break;
              case "wednesday":
                setwednesday([...wednesday," "+time+text])
                break;
                case "thursday":
                    setthursday([...thursday," "+time+text])
                    break;
                    case "friday":
                        setfriday([...friday," "+time+text])

                        break;
            default:
             return console.log("error");
          }

    }
   

    useEffect(() => {
        // save data to local storage when the lists change
        localStorage.setItem("monday", JSON.stringify(monday));
        localStorage.setItem("tuesday", JSON.stringify(tuesday));
        localStorage.setItem("wednesday", JSON.stringify(wednesday));
        localStorage.setItem("thursday", JSON.stringify(thursday));
        localStorage.setItem("friday", JSON.stringify(friday));
      }, [monday, tuesday, wednesday, thursday, friday]);

    return (

        <div className="grid-container">
            <div >
                <div className="header">Monday</div>
                {/* Render the list */}
                <ul>
                    {monday.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr />
                <div className="header">Tuesday</div>
                <ul>
                    {tuesday.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr />
                <div className="header">Wednesday</div>
                <ul>
                    {wednesday.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr />
                <div className="header">Thursday</div>
                <ul>
                    {thursday.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr />
                <div className="header">Friday</div>
                <ul>
                    {friday.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr />



            </div>






            <Form createSchedule={createSchedule}/>
        </div>
    )
}


export default Schedule