import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'



function RecipeManagement({OpenSidebar}) {
    

  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Recipe Management" } PageName={"Dashboard"}/>
            <Home AppName = {"Recipe-Management"}/>
    </>
  )
}

export default RecipeManagement;


