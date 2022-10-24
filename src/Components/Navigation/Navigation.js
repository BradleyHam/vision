import Hamburger from './Hamburger/Hamburger'
import NavMenu from './NavMenu/NavMenu'
import React, { useState } from 'react'

function Navigation(){
    const [navActive, setNavActive] = useState(false); 
    return (
        <div>
            <Hamburger navActive foo={()=> setNavActive(!navActive)}/> 
            <NavMenu isActive={navActive}/> 
        </div>
    )
}

export default Navigation