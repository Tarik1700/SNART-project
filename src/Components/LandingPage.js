import React from 'react'
import SmallFoodWindow from './SmallFoodWindow'
import LargeMainWindow from './LargeMainWindow'
import img1 from './img/foodimage.jpg'
import img2 from './img/lunchphoto.jpg'
import img3 from './img/dinnerphoto.jpg'
import img4 from './img/pizzaphoto.jpg'
import img5 from './img/hamburgerimage.jpg'
import img6 from './img/pizzaimage.jpg'
import img7 from './img/pastaimage.jpg'
import img8 from './img/pancakesimage.jpg'
import img9 from './img/cheeseburgerimage.jpg'
import img10 from './img/logo1.png'
import img11 from './img/logo2.png'

const LandingPage = () => {
  return (
    <div className=" overflow-y-clip">
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
        <div className="relative bg-[#F3F3F3] mt-6  h-[73.6vh] mx-2  rounded-xl rounded-b-none grid gap-4 grid-flow-row 
        shadow-[0px_10px_15px_-2px_rgba(0,0,0,0.5)] auto-cols-auto overflow-auto snap-y scroll-smooth ">

        <LargeMainWindow Foodname="Hamburger" imageurl={img5} Foodprice="15 KM"/>
        <LargeMainWindow Foodname="Pasta" imageurl={img6} Foodprice="10 KM"/>
        <LargeMainWindow Foodname="Pizza" imageurl={img7} Foodprice="9 KM"/>
        <LargeMainWindow Foodname="Pancakes" imageurl={img8} Foodprice="3 KM"/>
        <LargeMainWindow Foodname="Cheeseburger" imageurl={img9} Foodprice="5 KM"/>
        <LargeMainWindow Foodname="Hamburger" imageurl={img5} Foodprice="15 KM"/>
        <LargeMainWindow Foodname="Pasta" imageurl={img6} Foodprice="10 KM"/>
        <LargeMainWindow Foodname="Pizza" imageurl={img7} Foodprice="9 KM"/>
        <LargeMainWindow Foodname="Pancakes" imageurl={img8} Foodprice="3 KM"/>
        <LargeMainWindow Foodname="Cheeseburger" imageurl={img9} Foodprice="5 KM"/>
        </div>
       

    </div>
  )
}

export default LandingPage