import React from 'react'
import {useState} from 'react'

const TimeToReady = ( props) => {

    const {open1, onClose1, isOpen2, test, itemsPrice, IsOpenReady } = props;


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

  const closeBasketArrow = () => {
    setTimeout(function() {  
    onClose1();

    }, 500)
    document.getElementById("basket").style.transform = "translate(-50%,432px)";
    
  }
  



  if (!isOpen2) return null

  return (
      


<div id="basket" className=" transition-all fixed top-[50vh] left-52 w-[22rem] h-auto font-[poppins]  transform -translate-x-[50%] 
     bg-[#F5F5F5]  z-[1000] rounded-xl translate-y-[29rem] duration-700  ">

      <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-xl shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        
     
<div> {console.log(props.passingtest2) }</div>
     

        <h1 className=" relative text-2xl pl-4 pt-3 font-bold">Bill:</h1>
        <hr className="mx-4 bg-black "></hr>

        <div className="">
        
{ test.map((item) => ( 
    <div key = {item.id} className="col-2   text-xl grid grid-cols-9 ">
      <h1 className="text-left my-auto text-base col-span-3 pl-6">{item.name}</h1>
      <div className="col-span-6 text-lg my-auto place-self-end pr-5">
      {item.qty} x {item.price.toFixed(2)} KM
       </div>
       
     
 </div>
    

       
    )) }
    {test.length !== 0 && (
      <>
      <hr className="mx-4 bg-black"></hr>
      <div className="grid grid-cols-2 justify-items-start mt-4">
        <div className=" my-auto font-extrabold pl-4 text-2xl">Total:</div>
        <div className=" my-auto  text-2xl font-extrabold justify-self-end pr-6">{itemsPrice.toFixed(2)} KM</div>
      </div>
      </>
    )}
</div>  


        </div>
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