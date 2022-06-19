import React from 'react'
import {useState} from 'react'
import TimeToReady from './TimeToReady';

const Basket = ( props) => {

 
const {open1,  onClose1,  passingtest2, passingtest2Remove, test, itemsPrice, addOrderToFireBase, addToArray,
  sidepricing, sidepricingqty, setsidepricing } = props;


  const [opening, setOpening] = useState(false)
  
const [isOpenReady, setIsOpenReady] = useState ()


  function myLoop3() {        
    setTimeout(function() {   
                          
      if (document.getElementById("basket")) {          
       
        document.getElementById("basket").style.transform = "translate(-50%,0%)"
      }else{
        
        myLoop3(); 
      } 
                           
    }, 1000)
  }
  myLoop3();
  

  

  const closeBasket = () => {
    
   if(test.length > 0){
    setTimeout(function() {  
      setOpening(true);
    onClose1();
    
    setIsOpenReady(true);
    addToArray(message);
    addOrderToFireBase();
   // console.log(isOpen3)

    }, 500)
    
    document.getElementById("basket").style.transform = "translate(-50%,100vh)";
    //console.log(isOpen3)
    
  } else{
    alert("Basket is empty")
    
  }
 
  }
  
  

  const closeBasketArrow = () => {
    setTimeout(function() {  
    onClose1();

    }, 500)
    document.getElementById("basket").style.transform = "translate(-50%,100vh)";
    
  }
  
  
  const [message, setMessage] = useState("");




 

  if(!open1) return <TimeToReady  opening={opening} setOpening={setOpening} sidepricingqty={sidepricingqty} 
  sidepricing={sidepricing}  IsOpenReady={isOpenReady}  test={test} itemsPrice={itemsPrice} />

  return (
      <div >
      <div id="backdrop" className="font-[poppins]  bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
   <div>   </div>
<div className="">

</div>


<div className="fixed left-0 right-0 top-0 bottom-0 z-[10000] mx-6 ">
<div id="basket" className=" transition-all relative    w-full h-auto font-[poppins]  transform left-[50%] -translate-x-[50%]
     bg-[#F5F5F5]   z-[1000] rounded-sm translate-y-[100vh] duration-700  ">

      <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-sm shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        <button id="btn3" onClick={closeBasketArrow} className="z-[1000] flex pl-2 pt-2 absolute focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0);]" > <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM28.1725 10.5L2 10.5V13.5L28.1725 13.5V10.5Z" fill="black" fillOpacity="0.44"/>
</svg> </button>
     
<div> </div>
     

        <h1 className=" relative text-2xl pl-4 pt-10 font-bold">Bill:</h1>
        <hr className="mx-4 bg-black "></hr>

        <div className="">
        {test.length === 0 &&  <div className="text-xl text-center">Basket is empty</div>}
{ test.map((item) => ( 
  <div key = {item.id}>
   <hr className="mx-4 "/>
    <div  className="col-2 mr-2 text-center text-xl  grid grid-cols-9 ">
     
      <h1 className="text-left my-auto text-base col-span-4 pl-4">{item.name} {item.sides.map((items)=> (<div key = {items.ID} className="text-xs pl-3"> {items.sideName}</div>) ) }</h1>
      <div className="col-span-4 text-lg ml-5 my-auto mt-0 ">
      {item.qty} x {item.price.toFixed(2)} KM
       </div>

     

     <button id="btn1" className=" hidden text-right [font-size:3rem]  [line-height:2.2rem] mt-0 justify-end mx-auto 
      my-auto text-[#5DBB63]" onClick={()=>passingtest2(item)}>+</button> 
     <button id="btn2" className=" text-right self [font-size:3rem] [line-height:2.2rem] mt-0 justify-end mx-auto 
      my-auto text-red-700 " onClick={()=>passingtest2Remove(item)} >-</button> 
 </div>
    

       
 </div>)) }

    {test.length !== 0 && (
      <div >
      
       <div  className="col-2 mt-2 text-xl grid grid-cols-9 "> 
      <h1 className=" pl-6 my-auto text-base col-span-3  text-left font-semibold">Sides:</h1>
      <div className="col-span-6 text-lg place-self-end pr-[4rem] my-auto pl-1 ">
         {sidepricing.toFixed(2)} KM
        </div>
      <div></div>
    
 
      
      </div>
      <hr className="mx-4 bg-black"></hr>
      <div className="grid grid-cols-2 justify-items-start mt-4">
        <div className=" my-auto font-extrabold pl-4 text-2xl">Total:</div>
        <div className=" my-auto  text-2xl font-extrabold justify-self-end pr-6">{itemsPrice.toFixed(2)}  KM</div>
      </div>
      </div>
    )}
</div>  


        </div>

        <div className="pt-1">
        
<div id="comments" className="">
        <div className="text-sm mt-6 relative font-[poppins] mx-2">
            <h1 className="font-extrabold text-2xl font-poppins pl-1 pb-2">Comments</h1>
          
        <textarea value={message} 
      onChange={e => setMessage(e.target.value)}  placeholder="If you have any special requests for the kitchen write them here:"
         className=" px-4 rounded-sm h-36 border-2 w-full relative shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]"
          type="text"  maxLength="130" name="message" rows="4" cols="1"  />
        
        
            
          
        </div>
        <div className="mx-2 mb-2">
        <button  onClick={closeBasket} className=" relative mb-2 [-webkit-tap-highlight-color:rgba(0,0,0,0);] h-16 w-full  ml-0   bg-[#5DBB63] rounded-sm mt-4 
        shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]" >
        <div className="text-white text-xl my-auto mx-auto font-poppins">
        CONFIRM ORDER

        
        </div>
        
        </button>
        </div>
        </div>
        </div>

        </div>
        </div>
    </div> 
    
  )
}
export default Basket