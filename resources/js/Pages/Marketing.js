import React,{useState} from 'react';
import Header from '../components/Header';
import '../../css/app.css'



function Marketing({OpenSidebar}) {
    

  return (
            <>        
                <Header OpenSidebar={OpenSidebar} AppName ={"Marketing" } />
                <h3>Marketing</h3>
            </>
  )
}

export default Marketing;


