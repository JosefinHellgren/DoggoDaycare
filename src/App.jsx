import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiCall from './components/ApiCall.jsx'
import Welcome from './components/Welcome'
import DetailedList from './components/DetailedList.jsx'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Schedule from './components/Schedule'
import { useLocation } from 'react-router-dom'
import FirstPage from './components/FirstPage'



function App() {
  
  const [selectedDog,setSelectedDog] = useState(null)
  const [dogsData,setDogsData] = useState([]);
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';
  const [monday, setmonday] = useState(
    JSON.parse(localStorage.getItem("monday")) || ["08:00 Morning walk", "12:00 Grooming"]
  );
  const [tuesday, settuesday] = useState(
    JSON.parse(localStorage.getItem("tuesday")) || ["09:00 Morning walk", "12:00 Lunch"]
  );
  const [wednesday, setwednesday] = useState(
    JSON.parse(localStorage.getItem("wednesday")) || ["08:00 Run in forrest", "12:00 Agility"]
  );
  const [thursday, setthursday] = useState(
    JSON.parse(localStorage.getItem("thursday")) || ["08:00 Art class", "12:00 Goat Yoga"]
  );
  const [friday, setfriday] = useState(
    JSON.parse(localStorage.getItem("friday")) || ["13:00 Adventure ", "16:00 Bath"]
  );

  useEffect(() => {
    // save data to local storage when the lists change
    localStorage.setItem("monday", JSON.stringify(monday));
    localStorage.setItem("tuesday", JSON.stringify(tuesday));
    localStorage.setItem("wednesday", JSON.stringify(wednesday));
    localStorage.setItem("thursday", JSON.stringify(thursday));
    localStorage.setItem("friday", JSON.stringify(friday));
  }, [monday, tuesday, wednesday, thursday, friday]);




 

  function selectDoggie(newData) {
    setSelectedDog(newData);
  }

  function dogData (newData){

    setDogsData(newData);
  }



  
  return (

    
    
    <div className="App">
     
     {isWelcomePage ? null : <NavBar />}
   

    <Routes>

      <Route path="/" element={<Welcome dogData={dogsData} dogsData={dogData}/>}></Route>
      <Route path='/firstpage' element={<FirstPage dogData={dogsData} onUpdateData={selectDoggie}  schedule={{
      monday,
    tuesday,
    wednesday,
    thursday,
    friday
  }}/>}></Route>
      <Route path="/alldogs"  element={<ApiCall data={selectedDog} onUpdateData={selectDoggie}dogData={dogsData} updateDogsData={dogData}/>}></Route>
      <Route path="/specialdog" element={<DetailedList data={selectedDog}/>}> </Route>
      <Route path='/schedule' element={<Schedule   
       schedule={{
      monday,
    tuesday,
    wednesday,
    thursday,
    friday
  }}
  setSchedule={{
    setmonday,
    settuesday,
    setwednesday,
    setthursday,
    setfriday
  }}/>}></Route>
      <Route path='/firstpage' element={<FirstPage/>}></Route>
    </Routes>
      

      
    
    </div>
    
  )
}

export default App
