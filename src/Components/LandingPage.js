import React, { useState } from 'react'
import SmallFoodWindow from './SmallFoodWindow'
import LargeMainWindow from './LargeMainWindow'
import img10 from './img/logo1.png'
import img11 from './img/logo2.png'
import Modal1 from './Modal1'
import Basket from './Basket'
import data from './data'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { Link, Element } from 'react-scroll'


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
  const [numbers, setnumbers ] = useState (0)
  const [sidepricing, setsidepricing] = useState (0);
  const [sidepricingqty, setsidepricingqty] = useState ([]);
  const itemsPrice = test.reduce((a, c) => a + c.price * c.qty, 0) + sidepricing;
  const [user , setUser] = useState ({email:""});
  var result  = '';
  var counter = 1;
  let [arr3, setarr3] =useState([]);
  let [arr4, setarr4] =useState([]);
  
  

const countering = () =>{
  setnumbers(numbers + 1) 
  return numbers;
}
  


const passingtest = (product, sidesthings) => {
  const exist = test.find((x) => x.id === product.id);
  if(exist && (product.sides === [])){
    setTest(
      test.map((x)=> 
      x.id === product.id ? {...exist, qty: exist.qty +1 } : x
      )
    );
  }else{
 setTest([...test, { ...product, id: countering(), qty: 1, sides: sidesthings,  }])
}
};



const passingtest2Remove =(product) =>{
const exist = test.find((x) => x.id === product.id);
if(exist.qty === 1){
  product.sides.map((items) => (setsidepricing(sidepricing => sidepricing - items.sidePrice)));
  setTest(test.filter((x) => x.id !== product.id  ))  
}else{
  setTest(
    test.map((x)=> 
    x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
    )
  );
}
}



const addOrderToFireBase = () => {
  const list1 = collection(db, 'orders')
  return addDoc(list1, {
    created: serverTimestamp(),
    Order: [{ arr3 }]
});
};



const addToArray2 = (y) =>{
  setarr4(arr4 = test.concat(y));
  return arr4;
}



const addToArray = (x) =>{
  arr3 = test.concat(x, arr4);
}



function makeid(length) {
  var characters       = '0123456789';
  var charactersLength = characters.length;
  if(counter === 1){
    counter++;
  for ( var i = 0; i < length ; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 console.log("New random ID code is: " + result)
 return result;
}else{
  return result;
}
}



  return (
    <div className=" overflow-y-clip font-[poppins] h-[100vh]
      bg-cover
    [background-image:url(https://images.unsplash.com/photo-1512388908228-685f99a66ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)]  ">
      
        <div>
        <Modal1 makeid={makeid}   user ={user} setUser={setUser} 
         addToArray2={addToArray2} test={test} open={isOpen}  onClose={() => setIsOpen(false)} ></Modal1>

        <Basket  open1={isOpen1}  onClose1={() => setIsOpen1(false)} ></Basket>
        </div>

        <div className=" h-[4.5rem] top-2 relative  grid grid-cols-2 justify-items-end">
        <img src={img10} alt="" className="  h-16   my-auto " /> 
        <img src={img11} alt="" className="  h-10  my-auto  justify-self-start " /> 

    </div>
    <div className="  ">
        <div className="relative  mt-4  h-24 mx-2  grid  grid-flow-col 
       
        shadow-[0px_px_15px_-2px_rgba(0,0,0,0.5)]  auto-cols-auto overflow-auto snap-x scroll-smooth ">
        <div className="   ">
        <Link to="Original Burger "  spy={true} smooth={true} duration={500} containerId="containerElement" >
        <SmallFoodWindow  Foodname="Burgers" imageurl= 'https://www.weschenfelder.co.uk/media/amasty/blog/uploads/2017/04/Multiple-Burgers-In-Buns.jpg'  />
        </Link>
        </div>
        <div className="   ">
        <Link to="Sandwich"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        <SmallFoodWindow Foodname="Sandwiches" imageurl= 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        </Link>
        </div>
        <div className=" ">
        <Link to="Cezar salad"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        <SmallFoodWindow Foodname="Salads" imageurl= 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        </Link>
        </div>
        <div>
        <Link to="Chicken sesame"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        
        <SmallFoodWindow Foodname="Chicken" imageurl= 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        </Link>
        </div>
        <div className="h-24  ">
        <Link to="Nuggets"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        
        <SmallFoodWindow Foodname="Fried" imageurl= 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'  />
        </Link>
        </div>
        <div>
        <Link to="Nutella pancakes"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        
        <SmallFoodWindow Foodname="Deserts" imageurl= 'https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        </Link>
        </div>
        <div>
        <Link to="Olimpija"  spy={true} smooth={true} duration={500} containerId="containerElement" >
        
        <SmallFoodWindow Foodname="Drinks" imageurl= 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'  />
        </Link>
        </div>
        


        </div>
       </div>
        <Element id="containerElement1" name="test" className="Element">
              
        <div id="containerElement" className=" relative bg-transparent   bg-cover mt-3  h-[76vh] mx-0 w-full  rounded-b-none grid gap-1
        overflow-scroll   " >
       
{products.map((product) =>( <LargeMainWindow setTest={setTest} sidepricingqty={sidepricingqty} setsidepricingqty={setsidepricingqty} sidepricing={sidepricing} setsidepricing={setsidepricing} products={products}
 sides={product.sides} key={product.id} addToArray={addToArray} addOrderToFireBase={addOrderToFireBase} passingtest2Remove={passingtest2Remove} passingtest={passingtest} test={test}
Foodname={product.name} itemsPrice={itemsPrice} imageurl={product.image} Foodprice={product.price +"KM"} id={product.id} product={product} Fooddesc={product.description}/> ) )}
        
        
        <div className="pb-14"></div>
       
        </div>
        </Element>

    </div>
  )
}

export default LandingPage