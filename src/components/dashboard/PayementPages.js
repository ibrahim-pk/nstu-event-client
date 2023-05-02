import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import '../../style.css';
// import '../../css/searchbar.css'
// import '../../css/grid.css';
// import '../../css/buttons.css';
import '../../css/pay123.css';

import Navbar from "../layout/Navbar";

export default class PaymentPages extends Component {
    
      render() {
      
        return (
            <div>
            <Navbar></Navbar>
            <form className="credit-card">
            <div className="form-header">
              <h4 className="title" style={{textAlign:"center"}}><i className="fas fa-credit-card"></i> Payment Details</h4>
            </div>
           
            <div className="form-body">
            
              <input type="text" style={{widgth:"250px"}} className="card-number" placeholder="Card Number"/>
           
             
              <div className="date-field">
                <div className="month">
                  <select name="Month"  style={{width:"125px"}}>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
                <div className="year">
                  <select name="Year"  style={{width:"125px"}}>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
          
              <div className="card-verification">
                <div className="cvv-input">
                  <input type="text" placeholder="CVV"/>
                </div>
                <div className="cvv-details" style={{width:"80px"}}>
                  {/* <p>3 or 4 digits usually found <br/> on the signature strip</p> */}
                </div>
              </div>
  
          <br></br>
          <center>
              <button type="submit"  style={{width:"250px", marginTop:"40px"}} className="proceed-btn"><a href="#">Proceed</a></button>
              </center>
              {/* <button type="submit" className="paypal-btn"><a href="#">Pay With</a></button> */}
            </div>
          </form>
               </div>   
        )
      }
}