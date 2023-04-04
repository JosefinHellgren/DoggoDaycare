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



function App() {
  const WELCOME = 'welcome', DOGLIST = 'apiCall', DETAILEDLIST = 'detailedList';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [selectedDog,setSelectedDog] = useState(null)
  



  let content = null;

  function selectDoggie(newData) {
    setSelectedDog(newData);
  }



  




/*
  switch(currentScreen) {
    case WELCOME :
      content = <Welcome nextScreen={() => setCurrentScreen(DOGLIST) }/>;
      break;
    case DOGLIST:
      content = <ApiCall nextScreen={()=>setCurrentScreen(DETAILEDLIST)} data={selectedDog} onUpdateData={selectDoggie} />;
      break;
    case DETAILEDLIST:
        content = <DetailedList data={selectedDog} />;
    break;    
       
    default:
      content = null;
  }*/


  
  return (

    
    
    <div className="App">
     
    <NavBar/>

    <Routes>

      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/alldogs" element={<ApiCall data={selectedDog} onUpdateData={selectDoggie}/>}></Route>
      <Route path="/specialdog" element={<DetailedList data={selectedDog}/>}> </Route>
      <Route path='/schedule' element={<Schedule/>}></Route>
    </Routes>
      

      
    
    </div>
    
  )
}

export default App
