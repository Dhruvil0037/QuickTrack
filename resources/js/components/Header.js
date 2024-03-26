import React from 'react';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs';
import '../../css/app.css';

function Header({OpenSidebar,AppName,PageName}) {
    
  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {AppName}'s {PageName}
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon' />
        </div>
    </header>
    
  )
}

export default Header;