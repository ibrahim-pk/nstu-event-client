import React, { Component,Fragment } from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import '../../css/lookup.css';
import '../../css/buttons.css';
import "../../App.css";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStickyNote, faChair } from  '@fortawesome/free-solid-svg-icons';
import Navbar from "../layout/Navbar";
import host from "../../img/host.jpg";

const AA =props =>(props.events.name);

const AnyReactComponent = ({ text }) => 
  <div>{
    <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)'} }>
    <img  
    src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' 
    style={{ height: '50px', width: '50px' }} />
    {text}
    </div>
  }</div>; 


const Events = props => (
  <div>
       
  </div>
)
export default class EventInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      type:'',
      information:'',
      longitude:0,
      latitude:0,
      organizer:'',
      events:[],
      capacity:5,
      Date: new Date(),
      showmessage:true,
      reditto:false,
      disabled1:false,
      StringDates: []

    }
    this.onsubmit= this.onsubmit.bind(this);
  }

  componentDidMount() {
         //const id=this.props.match.params.id
    axios.get('http://localhost:5000/api/auth/show/'+this.props.match.params.id)
      .then(response => {
         console.log(response.data)
        this.setState({ events: response.data,
          name : response.data[0].name,
          longitude:response.data[0].longitude,
          latitude:response.data[0].latitude,
          capacity:response.data[0].Capacity,
         // Date:response.data[0].Date,
          information:response.data[0].information,
          Details:response.data[0].Details,
          pay:response.data[0].pay,
          address:response.data[0].address,
          organizer:response.data[0].organizer,
          //StringDates:response.data[0].StringDates

        })
      })
      .catch((error) => {
        console.log(error);
      })
    //  axios.get(`http://localhost:5000/api/users/${this.state.organizer}`)
    //  .then((result)=>{
    //   console.log(result)
    //  })
    
  }
  disabledfunction(){
    if(this.state.capacity ===0){
      this.setState({
        disabled1:true,
        showmessage:false
      })
    }
    }
  
  onsubmit(e){
    e.preventDefault();
    if(this.state.capacity>0){
      axios.post('http://localhost:5000/api/auth/capacity',{capacity: this.state.capacity -1,name:this.state.name})
    .then(response => {
     console.log(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    })
    }
    
 
     
  }
  reg(){
    if (this.state.pay === 'paid')
     {
       if(this.state.capacity>0){
        return <button className="btn btn-cta" style={{padding:"5px 5px"}} href="#"onClick ={this.onsubmit} disabled={this.state.disabled1}><Link to={'/paymentq'}>Register</Link></button>
       }else{
        return <h1 style={{padding:"5px 5px"}}>Registration Closed</h1>
       }
     }
    else{
      if(this.state.capacity>0){
        return <button className="btn btn-cta" href="#"onClick ={this.onsubmit} disabled={this.state.disabled1}><Link to={'/payment/'+ this.props.match.params.id}>Register</Link></button>
      }else{
        return <h1 style={{padding:"5px 5px"}}>Registration Closed</h1>
      }
    }
      

  }
  render() {
    
    return (
      <div>
          {/*this.disabledfunction()*/}
          

          <Navbar></Navbar>
        <div > 
    <div className="event-page-header">
    <div className="event-page-header__poster event-poster-image">
        <div className="event-poster-image-overlay overlay-gradient-frombottom">
            <div className="event-poster-infobar">
                <ul className="event-wherewhen">
                    <li>
                        <span className="icon icon-geoposition"></span>
                        <span className="data-tag-white">{this.state.address}</span>
                    </li>
                    <li>
                        <span className="icon icon-calendar"></span>
                        <span className="data-tag-white">{this.state.StringDates[0]}</span>
                    </li>
                    <li>
                        <span className="icon icon-clock"></span>
                        <span className="data-tag-white">{this.state.StringDates[1]}</span>
                    </li>
                </ul>
                
            </div>
        </div>
    </div> 
    <div className="event-page-header__context">
        <div className="event-page-title">
            <Link className="event-category-tag" to={'/SearchEvents/'}>See Other Events</Link>
            <h2 style={{textAlign:"center"}}>{this.state.name}</h2>
            <hr></hr>
            <p>{this.state.information}</p>
        </div>
        <div className="event-page-cta">
            {/* <h2>{this.state.information}</h2> */}
            <p>{this.state.Details}
            </p>
        <center>
          <hr></hr>
            {/* <p className="countdown-number" style={{color:"black"} }> </p> */}
                    <p ><i style={{color:"white"}} className="fas fa-chair"></i>Event Capacity {this.state.capacity}</p>
  
            <div className="event-page-cta__action-bar">
            <p hidden ={this.state.showmessage}>this event is full, you will be put in waitlist if you still want Register for this event </p>
            {this.reg()} 
          <span className="data-tag data-tag-white">{this.state.pay} </span>
        <p className="btn2" style={{fontSize:"3rem", color:"white"}}><FontAwesomeIcon icon={faGem} /></p>
            </div>
            </center>
        </div>
    </div> 
</div> 
<div className="event-page-content" >
    <div className="event-page-content__description" >
        <div className="event-page-description" style={{border:"none"}}>
       
        </div>
    </div> 
    <div className="event-page-content__hype p-5">
     
         <GoogleMapReact
           bootstrapURLKeys={{
             key: "AIzaSyCjKLovvz4CotGbAeqITJ6yAzCNKkEQrSI"
           }}
           center={{ lat: this.state.latitude, lng: this.state.longitude }}
           defaultZoom={15}
         >
           <AnyReactComponent
             lat={this.state.latitude - 0.0017}
             lng={this.state.longitude + 0.001}
             text={this.state.name}
           />
         </GoogleMapReact>
         
         <h4 style={{textAlign:"center", padding: "20px"}}><i style={{color:"skyBlue"}} className="fas fa-map-marker-alt"></i> {this.state.address}</h4>
                    
                
                
            
        
        <div className="event-recommendations">
           
        </div>
      
    </div> 

    
</div> 
<hr></hr>
{/* <h2 style={{textAlign:"center"}}></h2>   */}
{/* <p style={{textAlign:"center"}}>Whether you're a foodie or a hiker, an animal lover or an archaeology buff, there’s an adventure to explore your passion.</p> */}
  </div>

 
  <div className="event-page-events-recommended">
          <h2>Events that match your Interests</h2>
          <p style={{textAlign:"center"}}>Whether you're a foodie or a hiker, an animal lover or an archaeology buff, there’s an adventure to explore your passion.</p>
  <hr></hr>
          <div className="events-list">
            <div className="events-list__card-wrap">
              <div className="event-card">
                <div className="event-card__poster1">
                  <div className="event-card-poster-overlay overlay-gradient-frombottom">
                    
                  </div>
                </div>

                <div className="event-card__description">
                  <h3 style={{textAlign:"center"}}>Trekking at Brown County</h3>
               
                </div>
              
              </div>
            </div>
            <div className="events-list__card-wrap">
              <div className="event-card">
                <div className="event-card__poster2">
                  <div className="event-card-poster-overlay overlay-gradient-frombottom">
                    
                  </div>
                </div>

                <div className="event-card__description">
                  <h3 style={{textAlign:"center"}}>Star Gazing at Brown County</h3>
               
                </div>
              
              </div>
            </div>

            <div className="events-list__card-wrap">
              <div className="event-card">
                <div className="event-card__poster3">
                  <div className="event-card-poster-overlay overlay-gradient-frombottom">
                    
                  </div>
                </div>
              
                <div className="event-card__description">
                  <h3 style={{textAlign:"center"}}>Hoosier Party</h3>
               
                </div>
            
              </div>
            </div>


          </div>
        </div>
     
  </div> 
    )
  }
}
