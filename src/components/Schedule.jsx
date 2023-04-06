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

const Schedule = (props) => {
    const { monday, tuesday, wednesday, thursday, friday } = props.schedule;
  const { setmonday, settuesday, setwednesday, setthursday, setfriday } = props.setSchedule;

    
   



    const createSchedule = (day,time,text)=>{

        console.log(day,time,text);
        switch(day.toLowerCase()) {
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
  

   
     
    return (

        <div className="grid-container">
            <div >
                <div className="header">Monday</div>
                {/* Render the list */}
                <ul>
                    {monday.map((item, index) => (
                        <li key={index}>{item}
                        <button onClick={() => setmonday(monday.filter((_, i) => i !== index))}>x</button></li>
                    ))}
                </ul>
                <hr />
                <div className="header">Tuesday</div>
                <ul>
                    {tuesday.map((item, index) => (
                        <li key={index}>{item}
                        <button onClick={() => settuesday(tuesday.filter((_, i) => i !== index))}>x</button>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="header">Wednesday</div>
                <ul>
                    {wednesday.map((item, index) => (
                        <li key={index}>{item}
                        <button onClick={() => setwednesday(wednesday.filter((_, i) => i !== index))}>x</button>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="header">Thursday</div>
                <ul>
                    {thursday.map((item, index) => (
                        <li key={index}>{item}
                        <button onClick={() => setthursday(thursday.filter((_, i) => i !== index))}>x</button>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="header">Friday</div>
                <ul>
                    {friday.map((item, index) => (
                        <li key={index}>{item}
                        <button onClick={() => setfriday(friday.filter((_, i) => i !== index))}>x</button></li>
                    ))}
                </ul>
                <hr />



            </div>






            <Form createSchedule={createSchedule}/>
        </div>
    )
}


export default Schedule