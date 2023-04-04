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

   /* const updatePresentValue =()=>{

      useEffect(()=>{
        fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126",{method :'PUT',
        }
      
    },[])}*/
    //here i want to change the data in the api, then make a new apicall to catch the updated data.
    //so i need to get the choosen dog in the data an change that dogs present value/data.
  

   

   
// lets put a little light och fun symbol to show if the dog is here.
//can we put a state on all the dogs but have different values on all of them?
   
   
   
    return(
        <div id="diven">
      
{dogsData.length > 0 && (
        <ul className="Ytterlista">
          {dogsData.map(dog  => (
            <li className="listItem" key={dog.name}><div id="textInList"> Name:  {dog.name}  Breed:  {dog.breed} Present: {dog.present ? 'yes' : 'no'}
            </div>
            <img id="dogImage" src={dog.img} alt="" />
            
            {dog.present ? (
              <button >Check Out</button>
            ) : (
              <button >Check In</button>
            )}
            <button onClick={()=>handleClick(dog)}>select dog</button>
            
           
            </li>
           
          ))}
        </ul>
      )}


        </div>


    )

}

export default ApiCall