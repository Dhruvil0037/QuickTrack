import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'



function CustomerDiscount({OpenSidebar}) {
  

  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Customer Discount" } PageName={"Dashboard"}/>
            <Home AppName = {"Customer-Discount"}/>
    </>
  )
}

export default CustomerDiscount;

