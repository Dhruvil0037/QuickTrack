import React,{useState} from 'react';
import Header from '../components/Header';
import '../../css/app.css'



function Reports({OpenSidebar}) {
    

  return (
    <>
        
            <Header OpenSidebar={OpenSidebar} AppName ={"Reports" } />
            <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>       
        <div className='main-cards'>
          <div className='card'>
            {/* <Link to={`/${AppName}/MerchantList/Active`} >  */}
                <div className='card-inner'>
                    <h3>Product Review</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
          </div>
          <div className='card'>
            {/* <Link to={`/${AppName}/MerchantList/All`} > */}
                <div className='card-inner'>
                    <h3>Form Builder</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
          </div>
          <div className='card'>
            {/* <Link to={`/${AppName}/MerchantList/Free`} > */}
                <div className='card-inner'>
                    <h3>Multi Wishlist </h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
          </div>
          <div className='card'>
            {/* <Link to={`/${AppName}/MerchantList/Paid`} > */}
                <div className='card-inner'>
                    <h3>Event Management</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
          </div>
        </div>
        <div className='main-cards'>
        <div className='card'>
            {/* <Link to={`/${AppName}/MerchantList/Paid`} > */}
                <div className='card-inner'>
                    <h3>Voice Search</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
            {/* <Link to={`/${AppName}/MerchantList/Paid`} > */}
                <div className='card-inner'>
                    <h3>Customer Discount</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
            {/* <Link to={`/${AppName}/MerchantList/Paid`} > */}
                <div className='card-inner'>
                    <h3>Recipe Management</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1></h1>
            {/* </Link> */}
           
          </div>
        </div>
        </main>
    </>
  )
}

export default Reports;


