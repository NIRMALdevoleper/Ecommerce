import React, { Component, useState } from 'react';
import Almonds from './Almonds';
import Bars from './Bars';
import Bedsheets from './Bedsheets';
import Basmati from './Basmati';
import Popup from './Popup';
import menuShow from './menuShow';





class Cards extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count:0,

      cardObject: Almonds,
      newArr: []


    }
  }

  displayCategory = (value) => {
    this.setState({
      cardObject: value
    })
  }

  increaseQuan(obj) {
    this.setState((prevState) => ({
      cardObject: prevState.cardObject.map((value) => {
        if (value.name === obj.name) {
          return {
            ...value,
            orderedQuan: value.orderedQuan + 1
          }
        } else { return value }
      })

    }))
  }
  decreaseQuan(obj) {
    this.setState((prevState) => ({
      cardObject: prevState.cardObject.map((value) => {
        if (value.name === obj.name && obj.orderedQuan > 0) {
          return {
            ...value,
            orderedQuan: value.orderedQuan - 1,
          }
        } else { return value }
      })
    }))

  }



  sendTotalAmount(amount) {
    this.props.sendTotalAmount(amount)
  }


  addTOcart(obj) {
    let totalAmount = 0;
    let countdown=0;
   
    this.state.cardObject.forEach((value) => {
      if (value.name === obj.name) {
        totalAmount = value.orderedQuan * value.Price;
      }
    

      
    })
    this.state.cardObject.map((value)=>{
      if(value.name == obj.name && value.orderedQuan > 0 && value.orderedQuan < 2) {
countdown = this.state.count + 1
this.setState({
  totalAmount :countdown
})
      }
    })
    this.sendTotalAmount(totalAmount)

  }

 
  render() {
    let cardsArr = this.state.cardObject.map((obj) => {

      return (
        <div key={obj.name} className='cards'>
          <img src={obj.image} alt={obj.name} />
          <div className='top-h'>
          <p className='h56px'>{obj.name} <br></br>
        
            
              <span className="td-l_through">₹{obj.Price + (((obj.Discount) / 100) * obj.Price)}</span> <span>₹{obj.Price} </span> <button className='Discount'><span className='Discount'>{obj.Discount}%OFF</span></button></p>

        

          <div className='btn-none'>

            <div className='w235 '>
              <button className='br_bg-trans' onClick={() => {
                this.decreaseQuan(obj)
              }}
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>{obj.orderedQuan}</p>
              <button className='br_bg-trans' onClick={() => { this.increaseQuan(obj) }}>

                <i class="fa-solid fa-plus"></i></button> </div>
            <button className='br_bg-tran pd-2' id='myButton'
              onClick={
                () => { this.addTOcart(obj) }
              }>ADD TO CART</button> 
{/* <button className='pd-2 bc-orang'>BUY NOW</button> */}
          </div>
          </div>

        </div>
      )
    }) 
    return (
      <div className='mt-15'>
        <div className='cd-fx-bx'>
          <div className='ta-c'>
          <div>
            <h3 className='Rotate'>Category</h3>
            <div className='wth600' id='displaymenu'>
              <button className="br_bg-trans fc-w8" onClick={() => {
                this.displayCategory(Almonds);
              }}
              > Almonds </button>

              <button className="br_bg-trans fc-w8" onClick={() => {
                this.displayCategory(Bars);
              }}
              > Bars </button>



              <button className="br_bg-trans fc-w8" onClick={() => {
                this.displayCategory(Bedsheets);
              }}
              > Bedsheet </button>



              <button className="br_bg-trans fc-w8" onClick={() => {
                this.displayCategory(Basmati);
              }}
              > Basmati </button>
               

            </div>
          </div>
          <div>
          
          </div>
          </div>
          <div className='jc-sa_fw-w'>{cardsArr}
 </div>
         
          
        </div>
        <Popup arr={this.state.cardObject} totalAmount={this.props.totalAmount} showPopup={this.props.showPopup} hidePopup={this.props.hidePopup} />
        <menuShow menu = {this.state.cardObject} displayMenu = {this.state. displayMenu}/> 
      </div>
    )
  }
}


export default Cards
