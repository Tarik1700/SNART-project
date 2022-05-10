import React from 'react'

export default function Sides({side, itemsPrice, setsidepricing, sidepricing, key, setsidepricingqty, sidepricingqty, }) {

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    
    console.log(isChecked)
    // do whatever you want with isChecked value
    if(isChecked){
     
     setsidepricing(( (sidepricing) + (side.sideprice)))
     setsidepricingqty(( (sidepricingqty) + 1))
    }else{
      setsidepricing(( (sidepricing) - (side.sideprice)))
      setsidepricingqty(( (sidepricingqty) - 1))
    }
    
  }
  console.log("qty" + sidepricingqty)
  return (
    <div>
        <div key={key} className="row-span-1 grid grid-cols-4 ">
             <input  value={side.sideprice} onChange={e => handleChange(e)} type="checkbox" className="inline ml-6 my-auto 
          justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]  "/> 
          <h1 className="inline cols-span-2 text-sm my-auto"> {side.sidename}</h1> 
          <h1 className="inline "></h1> 
          <h1 className="col-span-1 justify-self-end mr-4">{side.sideprice}KM</h1> </div>
    </div>
  )
}
