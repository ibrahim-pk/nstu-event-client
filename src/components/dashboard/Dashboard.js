import kun from "../../img/Kun.jpg";
import Calendar from "../../assets/calendar.png";
import "../../css/dashb.css";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from '../../components/layout/Navbar';
import { connect } from "react-redux";
import Form from "../../assets/formo.png";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import axios from "axios";
import "../../css/buttons.css";
import { showevent } from "../../actions/auth";
import "../../style.css";
import "../../css/searchbar.css";
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'

import "../../css/grid.css";
import "../../css/buttons.css";
import Banner from '../../assets/banner.png';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const imgArray = [party, pool, italy]

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  profile: { profile, loading },
  showevent
}) => {

  const user=JSON.parse(localStorage.getItem('UserInfo'))
  //console.log(user._id)

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <div className="" style={{backgroundColor:"white"}}>
        <div className="">
          <div className="welcome__block">
            <div>
        
              <img src={user.avatar} style={{width:"128px", height:"128px"}} />
              <div>
                <h2>Hey There, {user && user.name}</h2> 
              </div>
            </div>
            <div>
            <h2 style={{textAlign:"center"}}>Actions</h2>
            <div className="card" >
 
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> <Link to={"/registerevent/" + user._id}>      <p style={{color:"black"}}> <i className="fas fa-tasks fa"></i>  Registered And Completed</p>
</Link></li>
    <li className="list-group-item">  <Link to={"/waitinglistevent/" + user._id}>   <p style={{color:"black"}}> <i className="fas fa-plus-square fa"></i> Waitlisted Events</p></Link></li>
    <li className="list-group-item"> <Link to="/edit-profile"  >
            <p style={{color:"black"}}> <i className="far fa-id-badge" style={{color:"black"}}></i> Your Profile</p>
          </Link></li>
  </ul>
</div>
               
              <p>  </p>
              <p>  </p>
             
            </div>
            <div className="calendar" style={{height:"300px"}}>
        <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} 
        //This needs to be set to the all of the user's registered/up events.
        events={[
            { title: 'Game Day', date: '2019-11-01' },
            { title: 'Music', date: '2019-11-02' }
          ]}
        />
        </div>
          </div>
         
          <div className="grid">
            <div className="column lg12 sm12">
              <div className="advert">
                <button type="button" className="close">
                  <i className="material-icons">&#xE5CD;</i>
                </button>
                <h3 >Explore Experiences</h3>
                <p>Find something great to do!</p>
                <p>
                  {" "}
                  <Link to="/SearchEvents">Browse All</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="column lg12">
              <h2 className="section__title" style={{textAlign:"center"}}>Events You Love  <i className="fas fa-heart fa-lg" style={{color: "#FF1493", width:"25px", height:"25px" }}></i></h2>
            </div>
           
            {profile !== null ? (
              <Fragment>
                
  
                <div className="container text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAccount()}
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="column lg4 md12 sm12">
                  <div className="widget">
                    <div className="title">
                      <h3>Complete your profile</h3>
                    </div>
                    <div className="d-flex gap-4 justify-content-center">
                      
                        
                          
                          <Link to="/create-profile">
                            <p>Create Your Profile</p>
                          </Link>
                        
                        
                        <button className="btn mx-3 btn-denger example_dsearch"  onClick={() => deleteAccount()}>
               Delete Account
            </button>
            
                     
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
              
        {/* <button className="example_c" ><Link to={'/registerevent/'+ user._id}>seel detail</Link></button>  */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
