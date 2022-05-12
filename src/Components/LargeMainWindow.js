import React from "react"
import img1 from './img/plus.png'
import PopUpWindow from './PopUpWindow'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {useState} from 'react'
import Accent from './Accent'
import TimeToReady from './TimeToReady'
import Basket from "./Basket";
import Sides from "./Sides";
import data from './data'

Modal.setAppElement('#root');

Modal.defaultStyles.overlay.backgroundColor = 'rgba(255, 255, 255, 0)';
Modal.defaultStyles.overlay.backdropFilter = 'tw-bg-opacity: 0.6';
Modal.defaultStyles.overlay.backgroundClip = 'paddingBox';
Modal.defaultStyles.overlay.backdropFilter = 'blur(6px)';



const LargeMainWindow  = (props) =>  {

  const {looping, textThing, id, product, passingtest, test, passingtest2Remove,
     itemsPrice, addOrderToFireBase, addToArray, setsidepricing, sidepricing, setsidepricingqty, sidepricingqty, setTest } = props;
  
  

  const [isOpen2, setIsOpen2] = useState(false)


function myLoop() {        
  setTimeout(function() {   
                        
    if (document.getElementById("modal")) {          
     
      document.getElementById("modal").style.transform = "translate(0px,0px)"
    }else{
      
      myLoop(); 
    } 
                         
  }, 1000)
}
myLoop()



 

    let subtitle; 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
   
  }

  function afterOpenModal() {
    
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setTimeout(function() {  
      setsidepricing(0);
      setsidepricingqty(sidepricingqty.filter((x) => x.sideName === 0 ))
    setIsOpen(false);
    }, 400)
    document.getElementById("modal").style.transform = "translate(0px,1000px)";
    
  }

  function closeModalWithSide() {
    setTimeout(function() {  

    setIsOpen(false);
    }, 400)
    document.getElementById("modal").style.transform = "translate(0px,1000px)";
    
  }

const both = () => {
  console.log(props.handleTest1);

  
  
  closeModalWithSide();
  setIsOpen2(true);
  passingtest(product, sidepricingqty);
  
  setsidepricingqty(sidepricingqty.filter((x) => x.sideName === 0 ))
  console.log(test)
}
//console.log("items price:" + sidepricing)

const animate =() => {
  document.getElementById("button").style.transform = "scale(1.1,1.1)";
  console.log("hi")
}



  return (
    <div className="snap-start ">
       
      <div>
     

<Accent sidepricing={sidepricing} sidepricingqty={sidepricingqty} addToArray={addToArray} addOrderToFireBase={addOrderToFireBase} itemsPrice={itemsPrice} test={test} passingtest2Remove={passingtest2Remove} passingtest2={passingtest} 
          open2={isOpen2}  onClose2={() => setIsOpen2(false)} />
   
<TimeToReady testingThing="this is just a test"/>




      </div>



     
      <button   className=" active:scale-[1.1] transition-all duration-[25ms] 
      [-webkit-tap-highlight-color:rgba(0,0,0,0);] w-full" onClick={openModal}>
        <div className="px-2  ">
        
        <div className=" bg-[#E7E7E7] h-[7rem]  top-3 mx-auto   relative rounded-lg"> 
        
        <div className="grid grid-cols-3 grid-rows-2 h-28 gap-1 ">

         <div className=" pt-2 pr-0 pl-2  h-full w-full row-span-2">
        <img src={props.imageurl} className="  h-24 w-28 mx-auto rounded-lg " /> 
      
        </div>
        <div className="col-span-2">
        <h1 className=" text-2xl pt-3 text-center ">{props.Foodname}</h1>
        <hr className="bg-white h-[0.2rem] mx-3 top-4 mt-1"></hr>
        </div>
        
        <div className="col-span-2 text-center text-2xl flex">
           <h1 className="mx-auto "> {props.Foodprice}</h1>
          {/* <img onClick={()=>passingtest(product)} src={img1} className="  h-12  justify-end mx-auto  mr-3 mt-3 " /> */ }
        </div>

        </div>
        

       
        

        </div>
    </div>
    </button>
    
    <Modal  aria={{
    labelledby: "heading1",
    describedby: "full_description1"
  }} id="modal" overlayClassName="" className=" bg-[#F5F5F5] h-auto pb-4 m-7 rounded-xl mt-[3rem]  font-[poppins] 
    transition-all duration-700 translate-y-[100vh] z-1000"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className=" bg-white m-2 top-2 h-auto pb-3  rounded-xl shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        <button onClick={closeModal} className="flex pl-2 pt-2 absolute focus:outline-none [-webkit-tap-highlight-color:rgba(0,0,0,0);]" > <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM28.1725 10.5L2 10.5V13.5L28.1725 13.5V10.5Z" fill="black" fillOpacity="0.44"/>
</svg> </button>
        
         <img src={props.imageurl} className="  h-[11rem] top-3 relative w-[14rem] mx-auto rounded-lg
          shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.5)] " /> 
        <h1 className=" relative text-lg pl-3 mt-5 font-bold">{props.Foodname}</h1>
      <div className="grid grid-cols-4  pl-2"> <h1 className=" text-opacity-60 justify-self-start my-auto pl-1 text-sm row-span-1 col-span-3 text-black ">{props.Fooddesc}</h1>
        <h1 className="  text-xl font-bold pr-2 justify-self-end my-auto">{props.Foodprice}</h1><div></div><div></div></div> 
        <div className="relative h-auto">
        
    
        
                

        </div>
        


        </div>


<div className="grid auto-rows-auto gap-4 text-lg mt-9 relative font-[poppins]">



{product.sides.map((side) => (   <Sides side={side} key={side.sideID} itemsPrice={itemsPrice} 
setsidepricing={setsidepricing} sidepricing={sidepricing} setsidepricingqty={setsidepricingqty} sidepricingqty={sidepricingqty} />   ))}
    

           
          
</div>

        <div className="mx-2">
        <button  className=" relative  [-webkit-tap-highlight-color:rgba(0,0,0,0);] h-16 w-full  ml-0   bg-[#5DBB63] rounded-xl mt-4 
        shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]" onClick={both}>
        <div className=" ">
        <svg className="mx-auto pt-2 pl-1 h-full " width="50"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_83)">
<path d="M21 39V21M21 21V3M21 21H39M21 21H3" stroke="white" strokeWidth="5" strokeLinecap="round" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_2_83" x="0.5" y="0.5" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_83"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_83" result="shape"/>
</filter>
</defs>
</svg>


        </div>
        </button>
        </div>
      </Modal>
    </div>
  )
}

export default LargeMainWindow
