import React from 'react'

const SmallFoodWindow = (props) => {


  return (
    <ul className="">
    <li>
    <div className=" snap-start  font-[poppins] w-28 h-24  ">
        <div className="  h-[5rem]  top-2 mx-auto w-24  relative rounded-sm "> 
        <div className=" relative p-1  h-14 w-[6rem] mx-auto">
          <div className="relative">
        <img src={props.imageurl} alt="images" className=" relative  mx-auto rounded-sm" />
        </div>
        </div>
        
        <div className="">
        <h1 className=" text-xs pt-2 text-center ">{props.Foodname}</h1>
        </div>
        

        </div>
    </div>
    </li>
    </ul>
  )
}

export default SmallFoodWindow