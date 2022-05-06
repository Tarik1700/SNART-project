import React from 'react'
import Basket from './Basket'
import {useState} from 'react'
import LargeMainWindow from './LargeMainWindow'

export default function Accent( {open2, children2, onClose2, props, test, 
  passingtest2, Foodprice, Foodname,passingtest2Remove, itemsPrice, addOrderToFireBase, addToArray  }) {

    
      
    const [isOpen1, setIsOpen1] = useState(false)

    function openBasket(){
        
        setIsOpen1(true);
      }

      function closeAccent(){
        
        onClose2();
      }
       

    function both(){
        openBasket();
        
        
      }

      function myLoop2() {        
        setTimeout(function() {   
                              
          if (document.getElementById("modal1")) {          
            
            document.getElementById("modal1").style.transform = "translate(0px,0px)"
          }else{
           
            myLoop2(); 
          } 
                               
        }, 3000)
      }
      myLoop2();

      function animate(){                 
            if (document.getElementById("modal1")) {          
            
              document.getElementById("modal1").style.transform = "translate(0px,-10px)"

              setTimeout(function() {   
                  document.getElementById("modal1").style.transform = "translate(0px,0px)"                        
              }, 200)
            }
              
            }


  return (
      <>
      
      <Basket addToArray={addToArray} addOrderToFireBase={addOrderToFireBase} itemsPrice={itemsPrice} passingtest2Remove={passingtest2Remove}  test={test} passingtest2={passingtest2} open1={isOpen1}  onClose1={() => setIsOpen1(false)} >
      </Basket>
      <button  onClick={both} className="fixed z-[999] " >
<div onClick={animate} id="modal1" className=" border-[4px]   border-[#9f9f9f] [-webkit-tap-highlight-color:rgba(0,0,0,0);]  transition-all fixed 
      -bottom-[4.5rem]  left-0 right-0 w-full  font-[poppins]  transform 
     bg-white z-[999] rounded-[70px] rounded-br-none  h-32 translate-y-52 ">
        <div className="text-white text-xl  relative mx-auto ">
        <svg className=" animate-pulse mx-auto mt-4" width="132" height="7" viewBox="0 0 132 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="3.5" x2="131.015" y2="3.5" stroke="#C4C4C4" strokeWidth="7"/>
</svg>


        </div>
        </div>
        </button>


     
        
    </> 
    
  )
}
