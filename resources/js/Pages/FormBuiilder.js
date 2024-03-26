import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'



function FormBuiilder({OpenSidebar}) {
    
  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Form Builder" } PageName={"Dashboard"}/>
            <Home AppName = {"Form-Builder"}/>
    </>
  )
}

export default FormBuiilder;


