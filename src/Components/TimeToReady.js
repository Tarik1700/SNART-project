import React from 'react'
import {useState} from 'react'

const TimeToReady = ( props) => {

    const {open1, onClose1, isOpen2 } = props;


  function myLoop3() {        
    setTimeout(function() {   
                          
      if (document.getElementById("basket12")) {          
       
        
      }else{
        
        myLoop3(); 
      } 
                           
    }, 1000)
  }
  myLoop3();


  
  function closeBasket() {
    setTimeout(function() {  
    onClose1();
    }, 500)
    document.getElementById("basket12").style.transform = "translate(-50%,432px)";
    
  }



  if (!isOpen2) return null

  return (
      
   

<div id="basket12" className=" transition-all relative  left-[50%] w-[22rem] h-auto font-[poppins]  transform -translate-x-[50%] 
     bg-[#F5F5F5]  z-[999] rounded-xl  duration-700  ">

        <div className="text-sm mt-6 relative font-[poppins]">
            <h1 className="font-extrabold text-2xl font-poppins pl-3 ">Order status:</h1>
            <div className="h-24 z-[999] bg-white relative mb-3 rounded-xl m-2 shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">

</div>
            
        </div>
        <div className="h-16 z-[999] mt-6 bg-white relative mb-3 rounded-xl m-2 shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">
        <h1 className="font-extrabold text-center"> Your order will be ready in ___ minutes, we'll be with You shortly</h1>
        </div>
       
        </div>
     
    
  )
}
export default TimeToReady