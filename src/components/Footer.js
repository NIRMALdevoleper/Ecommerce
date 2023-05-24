import React, { Component } from 'react'


 class Footer extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}




  render() {
    
    return (
      <div>
      <div className='flex-box'>

        <ul className='pg0'>
            <li className='inc-font'><p>All Categories</p></li>
            <li className='rgb65'>Grocery</li>
            <li className='rgb65'>Electronics</li>
            <li className='rgb65'>Fashion</li>
            <li className='rgb65'>Beauty</li>
            <li className='rgb65'>Home & Kitchen</li>
            <li className='rgb65'>Premium Fruits</li>
            <li className='rgb65'> Books</li>
            <li className='rgb65'> Furniture</li>
        </ul>
        <ul className='pg0'>
            <li className='inc-font'><p>Popular Categories</p></li>
            <li className='rgb65'>Staples</li>
            <li className='rgb65'>Beverages</li>
            <li className='rgb65'>Personal Care</li>
            <li className='rgb65'>Home Care</li>
            <li className='rgb65'>Fruits & Vegetables</li>
            <li className='rgb65'>Baby Care</li>
            <li className='rgb65'>Snacks & Branded Foods</li>
            <li className='rgb65'>Dairy & Bakery</li>
        </ul>
        <ul className='pg0'>
            <li className='inc-font'><p>Customer Account</p></li>
            <li className='rgb65'>My Account</li>
            <li className='rgb65'>My Orders</li>
            <li className='rgb65'>Wishlist</li>
            <li className='rgb65'>Payment Methods</li>
            <li className='rgb65'>Delivery Addresses</li>
            <li className='rgb65'>Shopping Mart wallet</li>
        </ul>
        <ul className='pg0'>
            <li className='inc-font'><p>Help & Support</p></li>
            <li className='rgb65'>About Us</li>
            <li className='rgb65'>FAQ</li>
            <li className='rgb65'>Terms & Conditions</li>
            <li className='rgb65'>Privacy Policy</li>
            <li className='rgb65'>E-waste Policy</li>
            <li className='rgb65'>Cancellation & Return Policy</li>
            <li className='rgb65'>Shipping & Delivery Policy</li>
        </ul>
        <div className='w345'>
          
        <h3 className='mt30 inc-font'>Contact Us</h3>
        <section>
        <p className='rgb65'><address className='cr-bl rgb65'>WhatsApp us:   <span className='color-link'><a href='#' target='_blank'> +91xxxx-xxx-xxx</a></span> </address> 
        <address className='cr-bl'>        Call us: <span className='color-link'> <a href='#' target='_blank'>1800 930 3433</a></span></address>
        <time>8:00 AM to 8:00 PM, 365 days</time></p> 

        <p className='rgb65'>Please note that you are accessing the BETA version of <span className='color-link'><a href='#' target='_blank'>Shoppingmart.com</a></span></p>

        <p className='rgb65'>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on <span className='color-link'><a href='#' target='_blank'>cs@mart.com</a></span></p>
        </section> 
       <h3 className='inc-font'> Download the app</h3>
       <div className='d-flx'>
     
        <button className='bg-bl'><ul><li><img className='wh-ht-mini' src="https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg?ssl=1" alt=' error'/></li>
        <li className='normal-fsize'><span className='small-fsize'>GET IT ON </span><br></br><span className='small-fsize'>Google Play</span></li></ul></button>
       
      
        <button className='bg-bl'><ul><li> <i class="fa-brands fa-apple"></i></li>
        <li className='normal-fsize'><span className='small-fsize'>Download on the</span><br></br><span className='small-fsize'>App Store</span></li></ul></button>
      
       </div>
       </div>
       </div>
       
       <div>
        
          <div className='br-btm'>
          <div className='flex-box2'>
        <div>
            <ul className='w345 d-flx2 small-font pg0'>
              <li className='margins'><span className='bg-red'><i class="fa-solid fa-bag-shopping bg-red"></i></span></li>
              <li className=''>© 2023 All rights reserved. Nirmal Retail Ltd.</li>
            </ul> 
          </div>
          <ul className='small-font'><li>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</li></ul>
        </div>
      </div>
      </div>
      </div>
      
    )
  }
}

export default Footer
