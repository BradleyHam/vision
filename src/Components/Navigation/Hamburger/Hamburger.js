import './Hamburger.css'
import Hamburger from 'hamburger-react'

function MyHamburger(props) {
  console.log(props)
    return (
      <div className="hamburger-container-outer">
        <div className="hamburger-container"  onClick={()=> props.foo()}>
            <Hamburger color="#cba135" rounded />
        </div>
        <div className="cirlce-background"></div>
      </div>
    );
  }
  
  export default MyHamburger;
  

//   toggled={isOpen} toggle={setOpen}  ----- This goes in hamburger component 