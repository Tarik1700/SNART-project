import React from 'react'
import {useState} from 'react'

const TimeToReady = ( props) => {

    const {open1, onClose1, isOpen2, test, itemsPrice, IsOpenReady, sidepricing } = props;


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
    document.getElementById("basket12").style.transform = "translate(-50%,30vh)";
    
  }

  const closeBasketArrow = () => {
    setTimeout(function() {  
    onClose1();

    }, 500)
    document.getElementById("basket").style.transform = "translate(-50%,30vh)";
    
  }
  



  if (!isOpen2) return null

  return (
      

<div className="fixed left-0 right-0 top-0 bottom-0 z-[1000] mx-6">
<div id="basket" className=" transition-all relative  top-[18rem]  w-full h-auto font-[poppins]  transform left-[50%] -translate-x-[50%]
     bg-[#c7c7c7] pb-1  z-[1000] rounded-xl translate-y-[65vh] duration-700 ">

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
      <div  className="col-2  text-xl grid grid-cols-9 "> 
      <h1 className=" pl-6 my-auto text-base col-span-3  text-left font-semibold">Sides:</h1>
      <div className="col-span-6 text-lg place-self-end pr-5 my-auto pl-1 ">
       {/*sidepricingqty*/} 1 x {sidepricing.toFixed(2)} KM
        </div>
      <div></div>
    
 
      
      </div>
      <hr className="mx-4 bg-black"></hr>
      <div className="grid grid-cols-2 justify-items-start mt-4">
        <div className=" my-auto font-extrabold pl-4 text-2xl font-[poppins]">Total:</div>
        <div className=" my-auto  text-2xl font-extrabold justify-self-end pr-6">{itemsPrice.toFixed(2)} KM</div>
      </div>
      </>
    )}
</div>  


        </div>
        <div className="text-sm mt-6 relative font-[poppins]">
            <h1 className="font-extrabold text-2xl font-poppins pl-3 ">Order status:</h1>
            <div className="h-auto z-[999] bg-white relative mb-3 pb-1 rounded-xl m-2 shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">
            <div className=" w-auto my-auto mr-2 h-10 top-[0.5rem] rounded-[100rem] mx-2 relative bg-slate-400">
      
  <div className=" w-[95%]   h-7  rounded-[100rem] mx-2 mt-[0.4rem] inline-block   bg-green-400">
  <div className=" w-[50%]   -mt-[0.4rem]  ml-[50.1%] h-10 rounded-l-none   rounded-[100rem] mx-2 inline-block  bg-slate-400">
      

</div>
  </div>
  </div>
  <div class="grid pl-2 h-10   grid-cols-5 mt-2 divide-x divide-gray-500">
  <div className="w-0"></div>
  <div></div>
  <div></div>
  <div></div>
</div>
  <div className=" my-auto mt-0  h-[3rem] grid grid-cols-3">
    <div className="pl-4 place-self-start mt-[1rem] text-xs text-">
Order <br></br> taken!
    </div>
    <div className=" place-self-center mt-[1.7rem] font-extrabold">
Almost there
    </div>
    <div className=" place-self-end pr-4 text-xs">
Order <br></br> ready!
    </div>

  </div>
</div>
            
        </div>
        <div className="h-16 z-[999] mt-6 bg-white relative  rounded-xl m-2  shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">
        <h1 className="font-extrabold text-center"> Your order will be ready in ___ minutes, we'll be with You shortly</h1>
        </div>
       
        </div>
        </div>
    
  )
}
export default TimeToReady