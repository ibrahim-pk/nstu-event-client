import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import '../../style.css';
// import '../../css/searchbar.css'
// import '../../css/grid.css';
// import '../../css/buttons.css';
import "../../css/payment.css";

import Navbar from "../layout/Navbar";

export default class Paymentevents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      activityname: "",
      fee:"",
      reditto: false
    };
    //this.handlechange = this.handlechange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.searchh = this.searchh.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(
        "http://localhost:5000/api/auth/confirmations/" +
          this.props.match.params.id
      )
      .then(response => {
        //console.log(response)
        this.setState({
          activityname: response.data[0].name,
          fee:response.data[0].pay
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchh(e) {
    // console.log(e.target.value)
    this.setState({ email: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
    console.log(this.props.match.params.id);
    //  alert(this.state.activityname)
    axios
      .post("http://localhost:5000/api/auth/confirmation", {
        email: this.state.email,
        activityname: this.state.activityname,
        event_id: this.props.match.params.id,
        user_id: localStorage.user_id
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          reditto: true
        });
      });
  }

  render() {
    if (this.state.reditto === true) {
      return <Redirect to={"/confi/" + this.props.match.params.id} />;
    }
    if (this.state.pay === "free") {
      return <Redirect to={"/confi/" + this.props.match.params.id} />;
    }
    return (
      <div>
        <Navbar></Navbar>
        
        <div className="container"> 
        <h3 className="panel-title display-td my-3">Payment Details</h3>
        <hr></hr>
          <div className="row">
                  <div className="panel-body">
                    <form
                      role="form"
                      id="payment-form"
                      onSubmit={this.onSubmit}
                    >
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label for="cardNumber">
                              CONFIRM EMAIL ADDRESS
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.email}
                              placeholder="E-MAIL"
                              name="email"
                              onChange={this.searchh}
                            ></input>
                            <label for="cardNumber">CARD NUMBER</label>
                            <div className="input-group">
                              <input
                                type="tel"
                                className="form-control"
                                name="cardNumber"
                                placeholder="Valid Card Number"
                                autocomplete="cc-number"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-7 col-md-7">
                          <div className="form-group">
                            <label for="cardExpiry">
                              <span className="hidden-xs">EXPIRATION</span>
                              <span className="visible-xs-inline">EXP</span> DATE
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="cardExpiry"
                              placeholder="MM / YY"
                              autocomplete="cc-exp"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                          <div className="form-group">
                            <label for="cardCVC">CV CODE</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="cardCVC"
                              placeholder="CVC"
                              autocomplete="cc-csc"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label for="couponCode">COUPON CODE</label>
                            <input
                              type="text"
                              className="form-control"
                              name="couponCode"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <input
                            type="submit"
                            className="bouton"
                            value="submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
        </div>
      </div>
  
    );
  }
}
