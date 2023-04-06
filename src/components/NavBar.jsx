import DetailedList from "./DetailedList";
import { Routes,Route,Link } from "react-router-dom";
import ApiCall from "./ApiCall";
import dogPaw from '../assets/dogpaw.png'
import { useNavigate } from "react-router-dom";


const NavBar =() =>{

    //how do i make navbar not appear at the welcom page.


    let navigate = useNavigate();

    function clickImage (){
        navigate("/firstpage");

    }


    return(
        <div id="navigation_bar">
           
           <img onClick={clickImage} src={dogPaw}></img>
           
            
            <Link to="/alldogs">
           <button className="navBarButtons">all dogs</button>
            </Link>
            <Link to="/schedule">
            <button className="navBarButtons">schedule</button>
            </Link>
            


        </div>

    )
}

export default NavBar;