import { Link } from 'react-router-dom';
import myImage from '../assets/46405817.webp';
import bulldog from '../assets/bulldog.png'
import dogwalker from '../assets/dogwalk.jpg'





const Welcome = (props)=>{



    return(
<section id='welcome-container'>
    
   <Link to="/alldogs">
   <img id='welcomeImage' src={dogwalker} alt="" />
</Link>
</section>
    )
}

export default Welcome;