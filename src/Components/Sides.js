import React from 'react'

export default function Sides({side, setsidepricing, sidepricing, setsidepricingqty, sidepricingqty, }) {

  const handleChange = (e) => {
    let isChecked = e.target.checked;

    //console.log(isChecked)
    
    if(isChecked){
     
     setsidepricing(( (sidepricing) + (side.sideprice)))
     setsidepricingqty([...sidepricingqty, {ID: side.sideID, sideName: side.sidename, sideQuantity: 1, sidePrice: side.sideprice }])
    }else{
      setsidepricing(( (sidepricing) - (side.sideprice)))
      setsidepricingqty(sidepricingqty.filter((x) => x.sideName !== side.sidename ))
    
    }
   //, ...sidepricingqty, sideQty: sideQty + 1  
  }
//  console.log("qty " + sidepricingqty )
  
  return (
    <div>
        <div  className="row-span-1 grid grid-cols-4 ">
             <input  value={side.sideprice} onChange={e => handleChange(e)} type="checkbox" className="inline ml-6 my-auto 
          justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]  "/> 
          <h1 className="inline cols-span-2 text-sm my-auto"> {side.sidename}</h1> 
          <h1 className="inline "></h1> 
          <h1 className="col-span-1 justify-self-end mr-4">{side.sideprice.toFixed(2)}KM</h1> </div>
    </div>
  )
}
