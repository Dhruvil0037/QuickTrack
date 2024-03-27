import React,{useState} from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../../css/app.css'


function VoiceManagement({OpenSidebar}) {
    

    return (
            <>        
                <Header OpenSidebar={OpenSidebar} AppName ={"Voice Search" } PageName={"Dashboard"}/>
                <Home AppName = {"Voice-Search"}/>  
            </>
    )
}

export default VoiceManagement;


