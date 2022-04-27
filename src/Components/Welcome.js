import React from 'react'


export default function Welcome(props) {
  return (
    <div>
       <h1 className=" text-black" > trebalo bi bit ovdje --- {props.Text} ---</h1>
      {console.log(props)}

    </div>
  )
}
