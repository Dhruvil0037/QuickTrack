import React,{useState} from 'react';
import {BsCart3, BsGrid1X2Fill} from 'react-icons/bs';
import { Link , useLocation  } from 'react-router-dom';
import '../../css/app.css';


function Sidebar({openSidebarToggle, OpenSidebar}) {
    const [currentSelected,setCurrentSelected] =  useState('');
    const location = useLocation();

    const handleItemClick = (itemName) => {
        setCurrentSelected(itemName);
      };
  return (
  
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <Link to="/" className='sidebar-link'>
                <div className='sidebar-brand'>
                    <BsCart3  className='icon_header'/> MyAppGurus
                </div>
            </Link>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>         
            <Link to="/" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/'|| location.pathname.startsWith('/Product-Review')||location.pathname.startsWith('/ProductReview')? 'selected' : ''}`} onClick={() => handleItemClick('/')}>
                    <BsGrid1X2Fill className='icon'/> Product Review
                </li>
            </Link>
            <Link to="/formBuilder" className='sidebar-link'>
            <li className={`sidebar-list-item ${location.pathname.startsWith('/formBuilder')||location.pathname.startsWith('/Form-Builder') |location.pathname.startsWith('/FormBuilder')? 'selected' : ''}`} onClick={() => handleItemClick('/formBuilder')}>
                    <BsGrid1X2Fill className='icon'/> Form Builder
                </li>
            </Link>
            <Link to="/multiWishlist" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/multiWishlist'||location.pathname.startsWith('/Multi-Wishlist')||location.pathname.startsWith('/MultiWishlist') ? 'selected' : ''}`} onClick={() => handleItemClick('/multiWishlist')}>
                        <BsGrid1X2Fill className='icon'/>Multi Wishlist 
                </li>
            </Link>
            <Link to ="/eventManagement" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/eventManagement' || location.pathname.startsWith('/Event-Management')||location.pathname.startsWith('/EventManagement')? 'selected' : ''}`} onClick={() => handleItemClick('/eventManagement')}>              
                        <BsGrid1X2Fill className='icon'/> Event Management                
                </li>
            </Link>
            <Link to ="/voiceSearch" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/voiceSearch'||location.pathname.startsWith('/Voice-Search')|| location.pathname.startsWith('/VoiceSearch') ? 'selected' : ''}`} onClick={() => handleItemClick('/voiceSearch')}>
                        <BsGrid1X2Fill className='icon'/> Voice Search                
                </li>
            </Link>
            <Link to ="/customerDiscount" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/customerDiscount'|| location.pathname.startsWith('/Customer-Discount')||location.pathname.startsWith('/CustomerDiscount') ? 'selected' : ''}`} onClick={() => handleItemClick('/customerDiscount')}>
                        <BsGrid1X2Fill className='icon'/> Customer Discount                
                </li>
            </Link>
            <Link to ="/recipeManagement" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname === '/recipeManagement'|| location.pathname.startsWith('/Recipe-Management')||location.pathname.startsWith('/RecipeManagement') ? 'selected' : ''}`} onClick={() => handleItemClick('/recipeManagement')}>
                        <BsGrid1X2Fill className='icon'/> Recipe Management                
                </li>
            </Link>
            <Link to ="/marketing" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname.startsWith('/marketing')||location.pathname.startsWith('/Marketing') ? 'selected' : ''}`} onClick={() => handleItemClick('/marketing')}>
                        <BsGrid1X2Fill className='icon'/> Marketing

                </li>
            </Link>
            <Link to ="/reports" className='sidebar-link'>
                <li className={`sidebar-list-item ${location.pathname.startsWith('/reports')||location.pathname.startsWith('/Reports') ? 'selected' : ''}`} onClick={() => handleItemClick('/reports')}>
                        <BsGrid1X2Fill className='icon'/> Reports
                </li>
            </Link>
        </ul>
    </aside>
  
  )
}

export default Sidebar;