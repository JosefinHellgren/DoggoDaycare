import { useState } from "react"




const Schedule = ()=>{
    const [currentScreen, setCurrentScreen] = useState();
    const [monday,setMonday] =useState([]);
    const [tuesday,setTuesday] =useState([]);
    const [wensday,setWensday] =useState([]);
    const [thursday,setThursday] =useState([]);
    const [friday,setFriday] =useState([]);

   let content = "";



    
        const Form =()=>{



            return(
                <div>
            <input type="text" placeholder="day" />
            <input type="text"placeholder="time" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>add to schedule</button>
            </div>

            )
        }

        const addNewData=()=>{

            console.log("isnt this working?");
            
            content = <Form/>
            console.log(content)
        
        
        }





    return(

       <div>
        <button onClick={()=>addNewData()}>add new data</button>

        {content}


        <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
        </tr>
        <tr>
          <td>Row 3, Column 1</td>
          <td>Row 3, Column 2</td>
        </tr>
      </tbody>
    </table>
    </div>
    )
}

export default Schedule