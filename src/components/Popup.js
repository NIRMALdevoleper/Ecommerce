import React, { Component } from 'react'
import Bedsheets from './Bedsheets'

class Popup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Total: 'Total amount to be paid',
      pay: 'Proceed to  Cart',
    }
  }

  closepopup(val) {
    this.props.hidePopup(val)
  }



  render() {

    let htmlstring = this.props.arr.map((value) => {
      if (value.orderedQuan > 0) {
        return (
          <div key={value.name}>
         

              <ul className='wth-400 pg0-2 ft-16'>
                <li className='cr-403'>{value.name}</li>
                <li className=' cr-403'>₹{value.Price}x{value.orderedQuan}</li>
              </ul>

         

          </div>
        )
      } else {
        return null;
      }
    });

    if (this.props.showPopup === "show") {
      return (
        <>
          <div className="popup">
<div className='container'>
            <div className="popup-content">
              <button onClick={() => {
                this.closepopup('none');
              }}

                className="close-popup"
              >
                Close

              </button>

              <div className='popup-headline'>

                <h3 className='mt-0 ft-16'>Cart Items</h3>

                <div>{htmlstring}</div>
                <div className='ps-b0'>
                  <div className='wth-400 br-none' >
                    <div><h3 className='cr-7F br-none ft-16 o-flow'>Total Amount to be Paid</h3></div>
                    <div><h3 className='ft-16 o-flow'>₹ {this.props.totalAmount}</h3></div>
                  </div>
                  <div>

                    <button className=" wth-400 header br-30 ft-16">Proceed to Cart </button>

                  </div>
                </div>

              </div>
            </div>

          </div>
          </div>

        </>
      );
    } else {
      return null;
    }
  }
}

export default Popup;
