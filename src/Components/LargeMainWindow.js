import React from 'react'
import img1 from './img/plus.png'
import PopUpWindow from './PopUpWindow'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root');


const LargeMainWindow  = (props) =>  {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="snap-start">
       
      
     
      <button className="" onClick={openModal}>
        <div className="px-2 ">
        
        <div className=" bg-[#E7E7E7] h-[7rem]  top-3 mx-auto   relative rounded-lg"> 
        
        <div className="grid grid-cols-3 grid-rows-2 h-28 gap-1 ">

         <div className=" pt-2 pr-0 pl-2  h-full w-full row-span-2">
        <img src={props.imageurl} className="  h-24 w-28 mx-auto rounded-lg " /> 
      
        </div>
        <div className="col-span-2">
        <h1 className=" text-2xl pt-3 text-center ">{props.Foodname}</h1>
        <hr className="bg-white h-[0.2rem] mx-3 top-4 mt-1"></hr>
        </div>
        
        <div className="col-span-2 text-center text-2xl flex">
           <h1 className="mx-auto ml-[6rem]"> {props.Foodprice}</h1>
            <img src={img1} className="  h-10  justify-end mx-auto  mr-3 mt-3 " /> 
        </div>

        </div>

        
        

        </div>
    </div>
    </button>
    <Modal className=" bg-gray-200 h-[52vh] m-10 rounded-xl mt-32 "
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className=" bg-gray-400 m-2 top-2 h-56 rounded-xl shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)]  relative">
        <button className="flex pl-1" onClick={closeModal}>close</button>
        
         <img src={props.imageurl} className="  h-36  relative w-48 mx-auto rounded-lg shadow-[5px_10px_15px_-2px_rgba(0,0,0,0.5)] " /> 
        <h1 className=" relative text-lg pl-1">{props.Foodname}</h1>
        <h1 className="inline mr-[4.5rem] pl-1 ">{props.Fooddesc}</h1>
        <h1 className=" inline text-xl">{props.Foodprice}</h1>
        
        <div className="grid grid-rows-4 gap-2 text-lg mt-5 ">
          
          <div className="row-span-1 grid grid-cols-4 "> <input type="checkbox" className="inline ml-4 my-auto justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)] "/> <h1 className="inline cols-span-2">Mustard</h1> <h1 className="inline "></h1> <h1 className="col-span-1 justify-self-end mr-2">+0.5KM</h1> </div>
          <div className="row-span-1 grid grid-cols-4 "> <input type="checkbox" className="inline ml-4 my-auto justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]"/> <h1 className="inline cols-span-2">Mustard</h1> <h1 className="inline "></h1> <h1 className="col-span-1 justify-self-end mr-2">+0.5KM</h1> </div>
          <div className="row-span-1 grid grid-cols-4 "> <input type="checkbox" className="inline ml-4 my-auto justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]"/> <h1 className="inline cols-span-2">Mustard</h1> <h1 className="inline "></h1> <h1 className="col-span-1 justify-self-end mr-2">+0.5KM</h1> </div>
          <div className="row-span-1 grid grid-cols-4 "> <input type="checkbox" className="inline ml-4 my-auto justify-self-start col-span-1 w-5 h-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.5)]"/> <h1 className="inline cols-span-2">Mustard</h1> <h1 className="inline "></h1> <h1 className="col-span-1 justify-self-end mr-2">+0.5KM</h1> </div>
          
        </div>
        <div className=" w-full h-16 bg-green-700 rounded-xl mt-4">
        

        </div>


        </div>
        
      </Modal>
    </div>
  )
}

export default LargeMainWindow
