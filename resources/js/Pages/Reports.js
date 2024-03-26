import React,{useState} from 'react';
import Header from '../components/Header';
import '../../css/app.css'



function Reports({OpenSidebar}) {
    

  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Reports" } />
            <h3>Reports</h3>
    </>
  )
}

export default Reports;


