import { key } from "localforage";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


let text =""








const ApiCall =(props)=> {
const [dogsData,setDogsData] = useState([]);
let navigate = useNavigate();

//here first look if the data there is dogData in Local Storage
// otherwise make api calla and save it to local storage

    useEffect(()=>{

      const storedData = localStorage.getItem('myData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setDogsData(parsedData.record);
        console.log("now we checked if there where any data in the local storage.");
      }else{
  console.log("okey so there where no data in the local storage");
        fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
        .then(response =>{
            return response.json()
        })
        .then(data =>{

          localStorage.setItem('myData', JSON.stringify(data));
          // save the data to the local storage
            setDogsData(data.record);
        });
        
console.log(dogsData);
      }
    },[])

    

    function handleClick(dog) {
      props.onUpdateData(dog);
      navigate("/specialdog");
    }


    const changePresentInLocalStorage = (chipNumber) => {
      const storedData = localStorage.getItem('myData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const updatedData = parsedData.record.map((dog) => {
          if (dog.chipNumber === chipNumber) {
            dog.present = !dog.present;
          }
          return dog;
        });
        localStorage.setItem('myData', JSON.stringify({record: updatedData}));
        setDogsData(updatedData);
      }
    };


   
    
   
   
    return(
        <div id="diven">
      
{dogsData.length > 0 && (
        <ul className="Ytterlista">
          {dogsData.map(dog  => (
            <div id="dogContainer">
            <li className="listItem" key={dog.name}>
              <img id="dogImage" src={dog.img} alt="" /> <h1 >{dog.name}</h1> 
             
            
            
            
            {dog.present ? (
              <button className="out"  onClick={()=>changePresentInLocalStorage(dog.chipNumber)}>here</button>
            ) : (
              <button className="in" onClick={()=>changePresentInLocalStorage(dog.chipNumber)}>not here</button>
            )}
            <button id="moreInfoButton" onClick={()=>handleClick(dog)}>more info</button>
            
           
            </li>
            </div>
           
          ))}
        </ul>
      )}


        </div>


    )

}

export default ApiCall