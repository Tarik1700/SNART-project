import React, { useState } from 'react'
import SmallFoodWindow from './SmallFoodWindow'
import LargeMainWindow from './LargeMainWindow'
import img1 from './img/foodimage.jpg'
import img2 from './img/lunchphoto.jpg'
import img3 from './img/dinnerphoto.jpg'
import img4 from './img/pizzaphoto.jpg'
import img10 from './img/logo1.png'
import img11 from './img/logo2.png'
import Modal1 from './Modal1'
import Basket from './Basket'
import data from './data'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';


const LandingPage = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCTKSeLGWP2zwZaHTKVmUlyXBQ8ZuwKjsU",
    authDomain: "snart-54aa9.firebaseapp.com",
    projectId: "snart-54aa9",
    storageBucket: "snart-54aa9.appspot.com",
    messagingSenderId: "1083026503280",
    appId: "1:1083026503280:web:fe3c1c06ee7a2dfdb866b5"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);




  const [isOpen, setIsOpen] = useState(true)
  const [isOpen1, setIsOpen1] = useState(false)
  
  const {products} = data;


  const [test, setTest] = useState([]);


  
const passingtest = (product) => {
  const exist = test.find((x) => x.id === product.id);
  if(exist){
    setTest(
      test.map((x)=> 
      x.id === product.id ? {...exist, qty: exist.qty +1 } : x
      )
    );
  }else{
 setTest([...test, { ...product, qty: 1}])
}
};

const passingtest2Remove =(product) =>{
const exist = test.find((x) => x.id === product.id);
if(exist.qty === 1){
  setTest(test.filter((x) => x.id !== product.id ));
}else{
  setTest(
    test.map((x)=> 
    x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
    )
  );
}

}
const itemsPrice = test.reduce((a, c) => a + c.price * c.qty, 0);
 

const addOrderToFireBase = () => {
console.log("worked")
  const list1 = collection(db, 'orders')
  
  return addDoc(list1, {
    created: serverTimestamp(),
    test1: [{ arr3 }]
});
   
};

let [arr3, setarr3] =useState([]);
let [arr4, setarr4] =useState([]);
let [arr5, setarr5] =useState([]);

const addToArray2 = (y) =>{
  setarr4(arr4 = test.concat(y));
  
  console.log(arr4);
  return arr4;
}


const addToArray = (x) =>{
  arr3 = test.concat(x, arr4);
  

  //const arr3 = [...test, ...x];
  console.log(arr3);
  console.log();
}




  return (
    <div className=" overflow-y-clip ">

        <div>
        
        

        <Modal1 addToArray2={addToArray2} test={test} open={isOpen}  onClose={() => setIsOpen(false)} >
      </Modal1>

      <Basket  open1={isOpen1}  onClose1={() => setIsOpen1(false)} >
      </Basket>

        </div>



        <div className="h-24 shadow-[5px_5px_15px_-2px_rgba(0,0,0,0.5)] relative  grid grid-cols-2 justify-items-end">
        <img src={img10} className="  h-16   my-auto " /> 
        <img src={img11} className="  h-10  my-auto  justify-self-start " /> 


        </div>
        <div className="relative bg-[#F3F3F3] mt-6  h-24 mx-2 rounded-xl grid  grid-flow-col 
        shadow-[5px_5px_15px_-2px_rgba(0,0,0,0.5)] auto-cols-auto overflow-auto snap-x scroll-smooth">
        <div className="h-24  ">
            <SmallFoodWindow Foodname="Breakfast" imageurl= {img1}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Lunch" imageurl= {img2}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Dinner" imageurl= {img3}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Pizza" imageurl= {img4}  />
        </div>
        <div className="h-24  ">
            <SmallFoodWindow Foodname="Breakfast" imageurl= {img1}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Lunch" imageurl= {img2}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Dinner" imageurl= {img3}  />
        </div>
        <div>
        <SmallFoodWindow Foodname="Pizza" imageurl= {img4}  />
        </div>


        </div>
        <div className="relative    bg-[#F3F3F3] mt-6  h-[73.6vh] mx-2  rounded-xl rounded-b-none grid gap-4 grid-flow-row 
        shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)] auto-cols-auto overflow-auto snap-y scroll-smooth ">

{products.map((product) =>(<LargeMainWindow key={product.id} addToArray={addToArray} addOrderToFireBase={addOrderToFireBase} passingtest2Remove={passingtest2Remove} passingtest={passingtest} test={test}
Foodname={product.name} itemsPrice={itemsPrice} imageurl={product.image} Foodprice={product.price +"KM"} id={product.id} product={product} Fooddesc={product.description}/>) )}
        
        <div className="pb-12"></div>
       
        </div>
       

    </div>
  )
}

export default LandingPage