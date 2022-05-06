import React, { Component } from 'react'

export default class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your table is ' + this.state.value);
    
    
    
    event.preventDefault();
    this.props.onClose();
    //this.props.test.push( this.state.value);
  }





  render() {
    if (!this.props.open) return null

    return (
        <>
        <div className=" bg-[rgba(255,255,255,0)]  bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-60  fixed top-0 left-0 right-0 bottom-0 z-[1000]"/>
        <div className="fixed left-0 right-0 top-0 bottom-0 z-[10000] mx-6 ">  
      <div className=" transition-all relative  top-[20%]  w-full h-auto font-[poppins]  transform 
       bg-[#F5F5F5]   z-[1000]   duration-700 rounded-[3rem]">
           <p className="mx-auto h-auto my-auto top-[2rem] text-xl text-center px-12 relative">
               By entering ID code and choosing the table number, you agree with our terms and conditions to make an order
           </p>
           <div className="mx-4 mt-[20%]   ">
             <p className="text-xl">Please input the ID code below: </p>
           <input className=" rounded-xl h-12 border-2 w-full  relative  "
            type="number" id="textarea1" maxLength="10" name="txta1" rows="1" cols="10" required />
  </div>

  <div className="relative h-12 bg-[#F5F5F5] pl-1 mt-[2vh] rounded-xl  my-auto mx-3">
  <form onSubmit={this.handleSubmit}>
          <label className="text-xl">
            Please choose the table number:
            <select className="w-full h-12 border rounded-xl  mt-2" value={this.state.value} onChange={this.handleChange}>
              <option value="1">Table number 1</option>
              <option value="2">Table number 2</option>
              <option value="3">Table number 3</option>
              <option value="4">Table number 4</option>
            </select>
          </label>
          { /*<input className="h-11  rounded-xl   border mx-auto relative 
           bg-[#5DBB63] w-28 text-white" type="submit" value="Submit" /> */}
        </form>
  </div>
  <div className="relative mt-[3.5rem] pb-4 text-center">
          <button className="h-11  rounded-xl   border mx-auto relative 
           bg-[#5DBB63] w-28 text-white" onClick={this.handleSubmit}> Submit </button>
          </div>
      </div> 
      </div>
      </>
    )
  }
  }

