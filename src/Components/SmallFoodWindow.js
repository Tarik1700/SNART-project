import React from 'react'

const SmallFoodWindow = (props) => {


  return (
    <ul>
    <li>
    <div className="px-2 snap-start ">
        <div className=" bg-[#E7E7E7] h-[4.5rem]  top-3 mx-auto w-20  relative rounded-lg"> 
        <div className=" relative p-1 h-11 w-18">
          <div className="relative">
        <img src={props.imageurl} className=" relative  mx-auto rounded-lg" />
        </div>
        </div>
        
        <div className="">
        <h1 className=" text-xs pt-3 text-center">{props.Foodname}</h1>
        </div>
        

        </div>
    </div>
    </li>
    </ul>
  )
}

export default SmallFoodWindow