import DetailedList from "./DetailedList";
import { Routes,Route,Link } from "react-router-dom";
import ApiCall from "./ApiCall";


const NavBar =() =>{

    //how do i make navbar not appear at the welcom page.





    return(
        <div id="navigation_bar">
            <h3 id="logo">Dogs</h3>
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