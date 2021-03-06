import React, { Component} from 'react'

export default class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state1 = {value: 'Table 1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   
    this.state2 ={
      error: ""
    }

    this.state = {
      details:{code: ""}
    }

 
  }

  handleChange(event) {
    this.setState({...this.state1.value = event.target.value});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    this.props.addToArray2(this.state.value); 
    this.props.onClose();
  }


 
 

  render() {
    
    
    if (!this.props.open) return null


    const submitHandler = e => {
      e.preventDefault();

      Login(this.state.details);
  }
  

 

    const adminUser = {
   code: this.props.makeid(5),
   
    }
    
    const Login = details  => {


      if ( this.state.details.code === adminUser.code ) {
        //console.log("Logged in ");
        this.props.addToArray2(this.state1.value);
        this.props.onClose();
         this.props.setUser({
         
           code : details.code
         });
      } else { 
        alert("The current ID code is: " + adminUser.code)
        console.log("ID does not exist ");
        this.setState({...this.state2.error= "ID does not exist"});
        
      }
      console.log("Current code is: " + adminUser.code)
    
    }

   
    
  

    return (
        <>
      
        <div className=" bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
        <div className="fixed left-0 right-0 top-0 bottom-0 z-[10000] mx-6 ">  
      <div className=" transition-all relative  top-[15%]  w-full h-auto font-[poppins]  transform 
       bg-[#F5F5F5]   z-[1000]   duration-700 rounded-sm">
           <p className="mx-auto h-auto my-auto top-[2rem] text-xl text-center px-4 relative">
               By entering ID code and choosing the table number, you agree with our terms and conditions to make an order
           </p>
           <div className="mx-4 mt-[20%]   ">
           <form onSubmit={submitHandler}>
             <label className="text-xl">Please input the ID code below: </label>
             {(this.state2.error !=="" ) ? ( <div className="error animate bg-red-200 mb-1 text-center rounded-sm font-bold p-1" > {this.state2.error}</div>) : " "}
           <input  onChange={e => this.setState({...this.state.details.code = e.target.value })} value={this.state.details.code}
           className=" rounded-sm h-12 border-2 w-full  relative  "
            type="number" id="code" name="code" min = "00000" max ="99999" />
            </form>
  </div>

  <div className="relative h-12 bg-[#F5F5F5] pl-1 mt-[2vh] rounded-xl  my-auto mx-3">
  <form onSubmit={this.handleSubmit}>
          <label className="text-xl">
            Please choose the table number:
            <select className="w-full h-12 border rounded-sm  text-center mt-2" value={this.state1.value} onChange={this.handleChange}>
              <option value="Table 1">Table number 1</option>
              <option value="Table 2">Table number 2</option>
              <option value="Table 3">Table number 3</option>
              <option value="Table 4">Table number 4</option>
            </select>
          </label>
          { /*<input className="h-11  rounded-xl   border mx-auto relative 
           bg-[#5DBB63] w-28 text-white" type="submit" value="Submit" /> */}
        </form>
        {/*<div>{adminUser.code}</div>*/}
  </div>
  <div className="relative mt-[4rem] pb-2 text-center">
          <button className="h-12  rounded-sm   border  relative 
           bg-[#5DBB63] w-[93%] text-white text-xl" onClick={submitHandler}> Submit </button>
          </div>
      </div> 
      </div>
      </>
    )
  }
  }

