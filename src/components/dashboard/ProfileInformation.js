import React, { Component,Fragment } from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import ishita from '../../img/Ishita.jpg';
import Kun from '../../img/Kun.jpg';
import lala from '../../assets/poster2.png';
import Jeremy from '../../img/Jeremy.jpg';
import Nayeemullah from '../../img/Nayeemullah.jpg';
const imgArray = [ishita,Nayeemullah,Jeremy,Kun]
const Events = props => (
  // <tr>
  //   <td>{props.events.name}</td>
  //   <td>{props.events.email}</td>
   
  // </tr>
  <div className="content-profile-page">
  <div className="profile-user-page card">
     <div className="img-user-profile">
       <img className="profile-bgHome" src={lala} style={{width:"590px"}}/>
       <img className="avatar" src={imgArray[Math.floor((Math.random() * 2) )]}/>
          </div>
         <div className="user-profile-data">
         <h1 style={{textAlign:"center"}}>{props.events.name}</h1>
                     </div> 
                     </div>
                     </div>

                     
)

export default class ProfileInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[]
    }
   // this.registerchange=this.registerchange.bind(this);
  }

  componentDidMount() {
         console.log(this.props.match.params.id)
    axios.get('http://localhost:5000/api/auth/gotoprofile/'+this.props.match.params.id)
      .then(response => {
        this.setState({ 
          events: response.data,
          
        })
      })
      .catch((error) => {
        console.log(error);
      })
      
  }/*
  registerchange(e){
    axios.put('http://localhost:5000/api/auth/shows', {name: this.state.name})
    .then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
   } 
 */
  exerciseList() {

    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id}/>;
    })
  }
  
  render() {
    return (
      <div>
        <Navbar></Navbar>
       { this.exerciseList()}
        </div>
    

    )
  }
}
