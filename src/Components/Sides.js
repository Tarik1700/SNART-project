import React from 'react'

export default function Sides(props) {
  return (
    <div>
        <div className="row-span-1 grid grid-cols-4 ">
             <input type="checkbox" className="inline ml-6 my-auto 
          justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]  "/> 
          <h1 className="inline cols-span-2 text-sm my-auto">{props.sides.side1}</h1> 
          <h1 className="inline "></h1> 
          <h1 className="col-span-1 justify-self-end mr-4">+0.5KM</h1> </div>
    </div>
  )
}
