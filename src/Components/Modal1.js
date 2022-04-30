import React from 'react'

export default function Modal1( {open, onClose,  }) {
    if (!open) return null

  return (
      <>
      <div className=" bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
      <div className="fixed left-0 right-0 top-0 bottom-0 z-[10000] mx-6 ">  
    <div className=" transition-all relative  top-[15%]  w-full h-[70vh] font-[poppins]  transform 
     bg-[#F5F5F5]   z-[1000]   duration-700 rounded-[3rem]">
         <p className="mx-auto h-auto my-auto top-[30%] text-xl text-center px-12 relative">
             By entering ID code, you agree with our terms and conditions to make an order
         </p>
         <div className="mx-4 mt-[60%]   ">
         <input className=" rounded-xl h-12 border-2 w-full  relative  "
          type="number" id="textarea1" maxLength="10" name="txta1" rows="1" cols="10" required />
</div>

        <button className="h-11  rounded-xl top-[20%]  border mx-auto relative 
         bg-[#5DBB63] w-28 text-white" onClick={onClose}> Submit </button>
        
    </div> 
    </div>
    </>
  )
}
