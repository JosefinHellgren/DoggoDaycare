import DetailedList from "./DetailedList";
import { Routes,Route,Link } from "react-router-dom";
import ApiCall from "./ApiCall";


const NavBar =() =>{





    return(
        <div id="navigation_bar">

            <Link to="/alldogs">
           <button>all dogs</button>
            </Link>
            <Link to="/schedule">
            <button>schedule</button>
            </Link>
            


        </div>

    )
}

export default NavBar;