import React from 'react'
import Welcome from './Welcome'

export default function TestComponent(props){


  return (
    <>
      <Welcome text={props.Texts}  />
      
      </>
  )
}