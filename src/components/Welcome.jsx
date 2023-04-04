import { Link } from 'react-router-dom';
import myImage from '../assets/46405817.webp';





const Welcome = (props)=>{



    return(
<section>
    <img id='welcomeImage' src={myImage} alt="" />
   <Link to="/alldogs">
<button>Show me the dogs</button>
</Link>
</section>
    )
}

export default Welcome;