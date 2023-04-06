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
  
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';




 

  function selectDoggie(newData) {
    setSelectedDog(newData);
  }



  
  return (

    
    
    <div className="App">
     
     {isWelcomePage ? null : <NavBar />}
    

    <Routes>

      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/alldogs" element={<ApiCall data={selectedDog} onUpdateData={selectDoggie}/>}></Route>
      <Route path="/specialdog" element={<DetailedList data={selectedDog}/>}> </Route>
      <Route path='/schedule' element={<Schedule/>}></Route>
      <Route path='/firstpage' element={<FirstPage/>}></Route>
    </Routes>
      

      
    
    </div>
    
  )
}

export default App
