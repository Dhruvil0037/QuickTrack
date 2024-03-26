import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MerchantUserData from './components/MerchantUserData';
import MerchantList from './components/MerchantList';
import Sidebar from './components/Sidebar';
import '../css/app.css';
import ProductReview from './Pages/ProductReview';
import FormBuiilder from './Pages/FormBuiilder';
import MultiWishlist from './Pages/MultiWishlist';
import EventManagement from './Pages/EventManagement';
import VoiceManagement from './Pages/VoiceManagement';
import CustomerDiscount from './Pages/CustomerDiscount';
import RecipeManagement from './Pages/RecipeManagement';
import Marketing from './Pages/Marketing';
import Reports from './Pages/Reports';


function MainApp() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <>
         <div className='grid-container'>
            
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Routes> 

                {/* Sidebar Routes */}
                <Route path="/" element={<ProductReview OpenSidebar={OpenSidebar}/> } />  
                <Route path="/formBuilder" element={<FormBuiilder OpenSidebar={OpenSidebar}/> } />
                <Route path="/multiWishlist" element={<MultiWishlist OpenSidebar={OpenSidebar}/> } />
                <Route path="/eventManagement" element={<EventManagement OpenSidebar={OpenSidebar}/> } />
                <Route path="/voiceManagement" element={<VoiceManagement OpenSidebar={OpenSidebar}/> } />
                <Route path="/customerDiscount" element={<CustomerDiscount OpenSidebar={OpenSidebar}/> } />
                <Route path="/recipeManagement" element={<RecipeManagement OpenSidebar={OpenSidebar}/> } />
                <Route path="/marketing" element={<Marketing OpenSidebar={OpenSidebar}/> } />
                <Route path="/reports" element={<Reports OpenSidebar={OpenSidebar}/> } />
                
                {/* Common Routes For all Apps */}
                <Route path="/:appName/MerchantList/Active" element={<MerchantList RequestedData={'Active Merchant List'} OpenSidebar={OpenSidebar}/> } />    
                <Route path="/:appName/MerchantList/All" element={<MerchantList  RequestedData={'All Merchant List'} OpenSidebar={OpenSidebar}/> } />    
                <Route path="/:appName/MerchantList/Free" element={<MerchantList RequestedData={'Free Merchant List'} OpenSidebar={OpenSidebar}/> } />    
                <Route path="/:appName/MerchantList/Paid" element={<MerchantList RequestedData={'Paid Merchant List'} OpenSidebar={OpenSidebar}/> } />    
                <Route path="/:appName/:requestedData" element={<MerchantUserData  OpenSidebar={OpenSidebar}/>}/>  

                <Route path="*" element={<h1>Not Found</h1>} />
                
            </Routes>
             
        </div> 
    </>
  )
}

export default MainApp;

if (document.querySelector("#app")) {
        ReactDOM.createRoot(document.querySelector("#app")).render(
            <BrowserRouter>
            <MainApp />
        </BrowserRouter>
        );
    }
