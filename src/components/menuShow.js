import React, { Component } from 'react';
import Basmati from './Basmati';
import Bars from './Bars';
import Almonds from './Almonds';
import Bedsheets from './Bedsheets';

class menuShow extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }







    render() {
        let cardArr = this.props.menu.map((value) => {
           
                return (
                    <div>
                        <img src='dd' />
                        <h2>{value.name}</h2>

                        <div>
                            <p>
                                <span className="td-l_through">₹{value.Price + (((value.Discount) / 100) * value.Price)}</span> <span>₹{value.Price} </span> <button className='Discount'><span className='Discount'>{value.Discount}%OFF</span></button></p>
                        </div>
                        <div>

            <div className='w235 '>
              <button className='br_bg-trans' onClick={() => {
                this.decreaseQuan(value)
              }}
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>{value.orderedQuan}</p>
              <button className='br_bg-trans' onClick={() => { this.increaseQuan(value) }}>

                <i class="fa-solid fa-plus"></i></button> </div>
            <button className='br_bg-trans' id='myButton'
              onClick={
                () => { this.addTOcart(value) }
              }><ul className='w235'><li>Add</li> <li><i class="fa-solid fa-plus"></i></li></ul></button>

          </div>

                    </div>




                )
            
        })
        if (this.props.displaymenu === 'show') {
        return (
          
            <div>
                <div>
                    <button>Almonds</button>
                    <button></button>
                    <button></button>
                    <button></button>
            <div>{cardArr}</div>
                
            </div>
            </div>
            

        ) }

    }

}

export default menuShow
