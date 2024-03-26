import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'


function ProductReview({OpenSidebar}) {
    

  return (
    <>        
            <Header OpenSidebar={OpenSidebar} AppName ={"Product Review" } PageName={"Dashboard"}/>
            <Home AppName = {"Product-Review"}/>  
    </>
  )
}

export default ProductReview;


