import React from 'react'
import {useState} from 'react'

const TimeToReady = ( props) => {

    const {open1, onClose1, isOpen2, test, itemsPrice } = props;


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
     bg-[#F5F5F5]  z-[999] rounded-xl translate-y-[27rem] duration-700  ">

      <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-xl shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        <button id="btn3" onClick={closeBasketArrow} className="z-[1000] flex pl-2 pt-2 absolute focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0);]" > <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM28.1725 10.5L2 10.5V13.5L28.1725 13.5V10.5Z" fill="black" fillOpacity="0.44"/>
</svg> </button>
     
<div> {console.log(props.passingtest2) }</div>
     

        <h1 className=" relative text-2xl pl-4 pt-10 font-bold">Bill:</h1>
        <hr className="mx-4 bg-black "></hr>

        <div className="">
        {test.length === 0 && <div className="text-xl text-center">Basket is empty</div>}
{ test.map((item) => ( 
    <div key = {item.id} className="col-2  text-center text-xl grid grid-cols-9 ">
      <h1 className="mx-auto my-auto text-base col-span-3 pl-2">{item.name}</h1>
      <div className="col-span-4 text-lg my-auto ">
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