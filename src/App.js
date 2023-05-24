 import React, { Component } from 'react';
 import Cards from './components/Cards';
import Header from './components/Header';
 import Footer from './components/Footer';
 import './css/Card.css'
 import './css/Header.css'
import './css/General.css'
import './css/Popup.css'
 
  class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    amount : 0,
    totalAmount: 0,
    showPopup: "",
    count:0,
    showMenu :''
     
  }
}

getAmount=(amt)=> {
 let bank = this.state.amount +amt;
 this.setState(
  { amount : bank,
  totalAmount : 0,
  }
 )
}

closepopup=(val)=>{
  this.setState({
    showPopup : val 
  })
}


getTotalAmount=(amt)=> {
  let collecting = this.state.totalAmount + amt;
  this.setState({
    totalAmount : collecting

  })


  if(amt>0){
  let watch = this.state.count +1
  this.setState({
    count : watch
  })
}

  // if(amt != 0) {
  
  //   let stop = this.state.count 
  //   this.setState({
  //     count:stop
  //   })
  
  // }

  }  

hidePopup=(val) => {
  this.setState({
    showPopup: val 
  })
}

toogle=(val) =>{
  this.setState({
    showMenu : val,
  })
}

showPopup=(val)=>{
this.setState({
  showPopup : val
  
})
}

   render() {
     return (
       <div>
         <Header  storeAccount ={this.state.totalAmount} showPopup ={this.showPopup} count = {this.state.count} toogle ={this.toogle}/>
         <Cards sendAmount ={this.props.getAmount} sendTotalAmount ={this.getTotalAmount} showPopup ={this.state.showPopup} totalAmount={this.state.totalAmount} hidePopup = {this.hidePopup} displayMenu = {this.state.showMenu}/>
         <Footer />
       </div>
     )
   }
 }
 
 export default App
 