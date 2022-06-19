import React from 'react'

const TimeToReady = ( props) => {

    const { opening, test, itemsPrice, sidepricing } = props;


    
  function myLoop3() {        
    setTimeout(function() {   
                          
      if (document.getElementById("basket12")) {          
       
        
      }else{
        
        myLoop3(); 
      } 
                           
    }, 1000)
  }
  myLoop3();


  
  

  if (!opening) return null

  return (
    <>
 <div id="backdrop" className=" bg-[rgba(255,255,255,0)] font-[poppins]   bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
<div className="fixed left-0 right-0 top-0 bottom-0 z-[10000] mx-6">
<div id="basket" className=" transition-all relative    w-full h-auto font-[poppins]  transform left-[50%] -translate-x-[50%]
     bg-[#F5F5F5]  pb-1  z-[1000] rounded-sm translate-y-[100vh] duration-700 ">

      <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-sm shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        
     

     

        <h1 className=" relative text-2xl pl-4 pt-3 font-bold">Bill:</h1>
        <hr className="mx-4 bg-black "></hr>

        <div className="">
        
{ test.map((item) => ( 
<div key = {item.id}>
<hr className="mx-4 "/>
    <div  className="col-2 auto-rows-auto text-xl grid grid-cols-9 ">
      <h1 className="text-left my-auto text-base col-span-5 pl-6">{item.name} {item.sides.map((items)=> (<div key = {item.id} className="text-xs pl-3"> {items.sideName} </div>) ) }</h1>
      
      <div className="col-span-4 text-lg my-auto place-self-end mt-0 pr-5">
      {item.qty} x {item.price.toFixed(2)} KM
       </div>
       
     
 </div>
    

       
 </div>)) }
    {test.length !== 0 && (
      <>
      <div  className="col-2  text-xl grid grid-cols-9 "> 
      <h1 className=" pl-6 my-auto text-base col-span-3  text-left font-semibold">Sides:</h1>
      <div className="col-span-6 text-lg place-self-end pr-5 my-auto pl-1 ">
         {sidepricing.toFixed(2)} KM
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
            <div className="h-auto z-[999] bg-white relative mb-3 pb-1 rounded-sm m-2 shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">
            <div className=" w-auto my-auto mr-2 h-10 top-[0.5rem] rounded-sm mx-2 relative bg-slate-400">
      
  <div className=" w-[95%]   h-7  rounded-sm mx-2 mt-[0.4rem] inline-block   bg-green-400">
  <div className=" w-[50%]   -mt-[0.4rem]  ml-[50.1%] h-10 rounded-l-none   rounded-sm mx-2 inline-block  bg-slate-400">
      

</div>
  </div>
  </div>
  <div className="w-max mt-2 h-10 mx-9 ">
  <div className="grid relative w-max gap-[32.2vw]  h-10 grid-cols-3  ">
  <div className="border-l-2 border-black"></div>
  <div className="border-l-2 border-black"></div>
  <div className="border-l-2 border-black"></div>
  </div>
  
</div>
  <div className=" my-auto mt-0 text-center h-[3rem] grid grid-cols-3">
    <div className="pl-4  place-self-start  text-xs ">
Order <br></br> Taken!
    </div>
    <div className=" place-self-center font-extrabold">
Almost There
    </div>
    <div className=" place-self-end mb-4 pr-4 text-xs">
Order <br></br> Ready!
    </div>

  </div>
</div>
            
        </div>
        <div className="h-16 z-[999] mt-6 bg-white relative  rounded-sm m-2  shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  ">
        <h1 className="font-extrabold text-center"> Your order will be ready in ___ minutes, we'll be with You shortly</h1>
        </div>
       
        </div>
        </div>
        </>
  )

}
export default TimeToReady