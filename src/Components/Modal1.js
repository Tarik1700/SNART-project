import React from 'react'

export default function Modal1( {open, children, onClose,  }) {
    if (!open) return null

  return (
      <>
      <div className=" bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
    <div className="  transition-all fixed top-[50vh] left-52 w-80 h-[40rem] transform -translate-x-[50%] -translate-y-[50%]
     bg-white  z-[1000] rounded-[3rem]">
         <p className="mx-auto my-auto top-[10rem] text-xl text-center px-12 relative">
             By entering ID code, you agree with our terms and conditions to make an order
         </p>
         <input className=" rounded-xl h-12 border-2 w-72 mx-auto relative left-4 top-[12rem]"
          type="number" id="textarea1" maxLength="10" name="txta1" rows="1" cols="10" required />


        <button className="h-11 top-[13rem] rounded-xl left-[7rem] border mx-auto relative 
         bg-[#5DBB63] w-28 text-white" onClick={onClose}> Submit </button>
        {children}
    </div> 
    </>
  )
}
