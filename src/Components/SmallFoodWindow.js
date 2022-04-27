import React from 'react'

const SmallFoodWindow = (props) => {
  return (
    <div className="px-2 snap-start">

        <div className=" bg-[#E7E7E7] h-[4.5rem]  top-3 mx-auto w-20  relative rounded-lg"> 
        <div className=" p-1 h-10">
        <img src={props.imageurl} className=" h-11 w-18 mx-auto rounded-lg" />
        </div>
        
        <div className="">
        <h1 className=" text-xs pt-3 text-center">{props.Foodname}</h1>
        </div>
        

        </div>
    </div>
  )
}

export default SmallFoodWindow