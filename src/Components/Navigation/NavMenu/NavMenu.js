import './NavMenu.css';

import Lion from '../../../Images/goldLion.png';
import Crown from '../../../Images/goldCrown.png';


function NavMenu(props){
    console.log(props.isActive)
    let className = 'NavMenu-container';
    if (props.isActive) {
      className += '-active';
    }
    return (
        <div className={className} > 
            <img className="Lion-image" alt='lion' src={Lion} /> 
            <nav>
                <div className='navItem'> Goals </div> 
                <div className='navItem'> Gratitude </div> 
                <div className='navItem'> Mission </div> 
            </nav>
            <img className="Crown-image" alt='crown' src={Crown} /> 
        </div>
    )
}

export default NavMenu 