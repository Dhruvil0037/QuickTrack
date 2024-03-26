import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'



function EventManagement({OpenSidebar}) {
    

  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Event Management" } PageName={"Dashboard"}/>
            <Home AppName = {"Event-Management"}/>
    </>
  )
}

export default EventManagement;


