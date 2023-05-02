import React, { Component} from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
// import '../../style.css';
// import '../../css/searchbar.css'
// import '../../css/grid.css';
// import '../../css/buttons.css';
import '../../css/payment.css';

import Navbar from '../../components/layout/Navbar';

export default class Paymentvenues extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
       email:'',
       venuename:'',
       reditto:false,
        };
        //this.handlechange = this.handlechange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.searchh =this.searchh.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        

  
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
axios.get('http://localhost:5000/api/auth/confirmationss/'+this.props.match.params.id)
 .then(response => {
   this.setState({ 
     venuename : response.data[0].name,
   })
 })
 .catch((error) => {
   console.log(error);
 })
}
 
 searchh(e){
    // console.log(e.target.value)
   this.setState({email: e.target.value})
  
 }
  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
       console.log(this.state.email)
    axios.post('http://localhost:5000/api/auth/confirmatio', {email: this.state.email,
    venuename :this.state.venuename})
    .then(response => {
       console.log(response.data)
       this.setState({
           reditto: true
       })
    });
  }
  
  render() {
      if( this.state.reditto === true){
       return  <Redirect to={'/confis/'+this.props.match.params.id} /> 
      }
    return (
        <div>
            
         {/* <form onSubmit ={this.onSubmit}>   
          
    <input type="text" id="search-bar" value={this.state.email}  placeholder="email" name='email' onChange ={this.searchh}></input>
    <input type='submit' className='bouton' value='submit'/>
   
   
 </form> */}
 <div className="container">
<div className="row">

<div className="col-xs-12 col-md-4">


<div className="panel panel-default credit-card-box">
<div className="panel-heading display-table" >
<div className="row display-tr" >
<h3 className="panel-title display-td" >Payment Details</h3>
<div className="display-td" >                            
<img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>

</div>                    
</div>
<div className="panel-body">
<form role="form" id="payment-form"  onSubmit ={this.onSubmit}>
<div className="row">
<div className="col-xs-12">
<div className="form-group">
<label for="cardNumber">CONFIRM EMAIL ADDRESS</label>
<input type="text" className="form-control"  value={this.state.email}  placeholder="E-MAIL" name='email' onChange ={this.searchh}></input>
<label for="cardNumber">CARD NUMBER</label>
<div className="input-group">
<input 
type="tel"
className="form-control"
name="cardNumber"
placeholder="Valid Card Number"
autocomplete="cc-number"
required autofocus 
/>
{/* <span className="input-group-addon"><i className="fa fa-credit-card"></i></span> */}
</div>
</div>                            
</div>
</div>
<div className="row">
<div className="col-xs-7 col-md-7">
<div className="form-group">
<label for="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
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
<input type="text" className="form-control" name="couponCode" />
</div>
</div>                        
</div>
<div className="row">
<div className="col-xs-12">
< input type='submit' className='bouton' value='submit' type="submit"/>
</div>
</div>
{/* <div className="row">
<div className="col-xs-12">
 <p className="payment-errors"></p>
</div>
</div> */}
</form>
</div>
</div>            



</div>            



</div>
</div>

      </div>
    
      </div>
    
    
     
    )
  }
}

/*
export default class Paymentvenues extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
       email:'',
       venuename:'',
       reditto:false,
       timeslot:''
        };
        //this.handlechange = this.handlechange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.searchh =this.searchh.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
axios.get('http://localhost:5000/api/auth/confirmationss/'+this.props.match.params.id)
 .then(response => {
   this.setState({ 
     venuename : response.data[0].name,
   })
 })
 .catch((error) => {
   console.log(error);
 })
}
 
 searchh(e){
    // console.log(e.target.value)
   this.setState({email: e.target.value})
  
 }
 onChange(e){
    this.setState({timeslot: e.target.value})
 }
  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
       console.log(this.state.email)
    axios.post('http://localhost:5000/api/auth/confirmatio', {email: this.state.email,
    venuename :this.state.venuename, timeslot: this.state.timeslot})
    .then(response => {
       console.log(response.data)
       this.setState({
           reditto: true
       })
    });
  }
  
  render() {
      if( this.state.reditto === true){
       return  <Redirect to={'/confis/'+this.props.match.params.id} /> 
      }
    return (
        <div>
           <Navbar></Navbar> 
         <form onSubmit ={this.onSubmit}>   
          
    <input type="text" id="search-bar" value={this.state.email}  placeholder="email" name='email' onChange ={this.searchh}></input>
    <h1>please select a timeslot </h1>
    <select value={this.state.timeslot} className='input2' name='timeslot' onChange={this.onChange}>
           <option value=''></option>
          <option value='8am-11am'>8am-11am</option>
          <option value='11am-2pm'>11am-2pm</option>
          <option value='2pm-5pm'>2pm-5pm</option>
          <option value='5pm-8pm'>5pm-8pm</option>
        </select>
    <input type='submit' className='bouton' value='submit'disabled ={!this.state.timeslot}/>
   
   
 </form>
      </div>
    
    
     
    )
  }
}
*/