import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'


function MultiWishlist({OpenSidebar}) {
   

  return (
        <>      
            <Header OpenSidebar={OpenSidebar} AppName ={"Multi Wishlist" } PageName={"Dashboard"}/>
            <Home AppName={"Multi-Wishlist"}/>  
        </>
  )
}

export default MultiWishlist;


