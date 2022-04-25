import React from 'react'

export default function Basket( {open1, children1, onClose1, props, onAdd  }) {



  function myLoop3() {        
    setTimeout(function() {   
                          
      if (document.getElementById("basket")) {          
       
        document.getElementById("basket").style.transform = "translate(-50%,-50%)"
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
    document.getElementById("basket").style.transform = "translate(-50%,432px)";
    
  }

    if (!open1) return null

  return (
      <>
      <div id="backdrop" className=" bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[999]"/>
   


<div id="basket" className=" transition-all fixed top-[50vh] left-52 w-[22rem] h-auto font-[poppins]  transform -translate-x-[50%] 
     bg-[#F5F5F5]  z-[999] rounded-xl translate-y-[27rem] duration-700  ">

      <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-xl shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        <button onClick={onClose1} className="z-[1000] flex pl-2 pt-2 absolute focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0);]" > <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM28.1725 10.5L2 10.5V13.5L28.1725 13.5V10.5Z" fill="black" fillOpacity="0.44"/>
</svg> </button>
       
         
        <h1 className=" relative text-lg pl-6 pt-10 font-bold">Bill:</h1>
      <div className="grid grid-cols-4  pl-10"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">aaaaaaaaaaa</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div> 
        <div className="grid grid-cols-4  pl-10"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">aaaaaaaaaaa</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div> 
        <div className="grid grid-cols-4  pl-10"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">aaaaaaaaaaa</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div> 
        <div className="grid grid-cols-4  pl-10"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">aaaaaaaaaaa</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div> 
        <div className="grid grid-cols-4  pl-10"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">aaaaaaaaaaa</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div>
     <hr className="bg-black opacity-100 h-[0.17rem] mx-4 mt-1" ></hr>
     <div className="grid grid-cols-4 mt-5 pl-6"> <h1 className=" font-extrabold justify-self-start my-auto pl-1 text-2xl row-span-1 col-span-3 text-black ">Total:</h1>
        <h1 className="  text-xl font-bold pr-3 justify-self-end my-auto">+0.00KM</h1><div></div><div></div></div>
        
        


        </div>
        <div className="text-sm mt-6 relative font-[poppins]">
            <h1 className="font-extrabold text-2xl font-poppins pl-3 pb-2">Comments</h1>
          
        <textarea placeholder="If you have any special requests for the kitchen write them here:"
         className=" px-4 rounded-xl h-36 border-2 w-[21rem] ml-2 relative shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]"
          type="text" id="textarea2" maxLength="130" name="txta2" rows="4" cols="1"  />
        
        
            
          
        </div>
        <button  onClick={closeBasket} className=" mb-3 [-webkit-tap-highlight-color:rgba(0,0,0,0);] h-16 w-[21rem] ml-2 bg-[#5DBB63] rounded-xl mt-4 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]" >
        <div className="text-white text-xl my-auto mx-auto font-poppins">
        CONFIRM ORDER


        </div>
        </button>


     
        </div>
    </> 
    
  )
}
