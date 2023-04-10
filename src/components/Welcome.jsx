import { Link } from 'react-router-dom';
import myImage from '../assets/46405817.webp';
import bulldog from '../assets/bulldog.png'
import dogwalker from '../assets/dogwalk.jpg'
import { useEffect } from 'react';





const Welcome = (props)=>{



    useEffect(()=>{

        const storedData = localStorage.getItem('myData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          props.dogsData(parsedData.record);
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
              props.dogsData(data.record);
          });
          
  console.log(props.dogData);
        }
      },[])



    

    return(
<section id='welcome-container'>

   <Link to="/firstpage">
  
   <img id='welcomeImage' src={dogwalker} alt="" />
  
</Link>
<h1><span id='doggodaycare'>Doggo Daycare</span>
  <br/>
We take care of your dog.</h1>
</section>
    )
}

export default Welcome;