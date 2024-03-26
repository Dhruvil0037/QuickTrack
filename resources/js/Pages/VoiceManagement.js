import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'


function VoiceManagement({OpenSidebar}) {
    

    return (
            <>        
                <Header OpenSidebar={OpenSidebar} AppName ={"Voice Management" } PageName={"Dashboard"}/>
                <Home AppName = {"Voice-Management"}/>  
            </>
    )
}

export default VoiceManagement;


