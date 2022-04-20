import React from 'react'
import img1 from './img/plus.png'
import PopUpWindow from './PopUpWindow'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root');


const LargeMainWindow = (props) => {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
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
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
       
        
      </Modal>
    </div>
  )
}

export default LargeMainWindow