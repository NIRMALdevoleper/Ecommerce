import React, { Component } from 'react'
import '../css/Header.css'

 class Header extends Component {
constructor(props) {
  super(props)

  this.state = {
    showPopup : "",
    toogle : "",
     
  }
}
showCart(val) {
this.props.showPopup(val)
}

displayMenu(val) {
if(val == true){}
}
 
 


  render() {
    return (
      <div className='fxd_z-ix'>
        <div className='header'>
        <div className='flex-box ptb-27'>
      <ul className='fd-r-jcsb fx-wrap pg0 flex-box'> 
      <li><i class="fa-solid fa-bars" id='display' onClick={()=>{this.displayMenu('true')}}></i> </li>
        <li className='ft22-800 title'>ShoppingMart<span className='ft12-700 h-none'>Beta</span></li>
        <li className='ft12-700 abs3 d-none2'> <i class="fa-solid fa-location-dot"></i>Deliver to Address</li></ul>
      <ul className='d-flx_ai-center'>
      <li className='ft12-700 pos-abs_LR'>
      <form action="search.php" method="GET">
        <input type="text" name="search_query" placeholder="Search ShoppingMart"></input> <button className='none h-none'><i class="fa-solid fa-magnifying-glass"></i></button>
       
    </form>
      
         </li>
         <li className='abs'><i onClick={()=>{this.showCart("show")}} class="fa-solid fa-cart-shopping cart"><sup> <span className='bg-red2'>{this.props.count}</span></sup></i></li>
        
        <li className='ft12-700 abs2'><span><i class="fa-solid fa-user"></i></span><span className='d-none2'>Sign in</span></li></ul></div> 
        </div>
        <div className='bg-cr-fff'><ul className='fd-r-w75 fx-wrap'>
            <li>Groceries</li>
            <li>Premium Fruits</li>
            <li>Home & Kitchen</li>
            <li>Fashion </li>
            <li>Electronics</li>
            <li>Beauty</li>
            <li>Home Improvement</li>
            <li>Sports,Toys & Luggage</li>
            </ul></div>
            </div>
      
    )
  }
}

export default Header;
