import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/dashb.css";
import host from "../../img/host.jpg";
import Calendar from "../../assets/calendar.png";
import Navbar from "../../components/layout/Navbar";
import Form from "../../assets/formo.png";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import "../../css/buttons.css";
// import '../../css/extraregister.css'
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import ishita from "../../img/Ishita.jpg";
import Kun from "../../img/Kun.jpg";
import Jeremy from "../../img/Jeremy.jpg";
import Nayeemullah from "../../img/Nayeemullah.jpg";
import modal from "./modal";
const imgArray = [ishita, Nayeemullah, Jeremy, Kun];

const DashboardOrg = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar></Navbar>
  
      <div className="welcome__block">
        <div>
          <img src={host} style={{ width: "128px", height: "128px" }} />
          <div>
    
            <h1>Welcome back, {user && user.name}</h1>
            <p>Nice to see you again</p>
          </div>

       
        </div>
        <div>
          
          {/* <img src={Form} style={{ width: "130px", height: "130px" }}></img> */}
          <div >
            <h2 style={{textAlign:"center"}}>Actions</h2>
          <div className="card" >
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><Link to="/landingorg" >
      <p style={{color:"black"}}> <i className="fas fa-tasks fa"></i>  Manage Events</p>
            {/* <modal></modal> */}
          </Link></li>
    <li className="list-group-item"> <Link to="/Addevent" >
            <p style={{color:"black"}}> <i className="fas fa-plus-square fa"></i> Add an event</p>
          </Link></li>
    <li className="list-group-item"> <Link to="/edit-profile"  >
            <p style={{color:"black"}}> <i className="far fa-id-badge" ></i> Your Profile</p>
          </Link></li>
  </ul>
</div>
        
          </div>
        </div>
      </div>

      {/* <ul className="nav nav-tabs">
  <li className="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul> */}
   <div className="grid">
            <div className="column lg12 sm12">
              <div className="advert">
                <button type="button" className="close">
                  <i className="material-icons">&#xE5CD;</i>
                </button>
                <h3 >Be a Good Host</h3>
                    <Link to='/chatscreen'>
          {/* <i className='fas fa-user' />{' '} */}
          <span className='hide-sm'><p> Access Your Guests here! </p></span>
        </Link> 
              
              </div>
            </div>
          </div>
      <div className="grid">
    
        {profile !== null ? (
          <Fragment>
         
            <div className="container text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                
                    <button
                      type="button"
                      style={{padding:"0px 0px"}}
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
                <div className="list">
                  <ul>
                    <li>
                      {" "}
                      <Link to="/create-profile">
                        <p>Create Your Profile</p>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="example_dsearch"
                        onClick={() => deleteAccount()}
                      >
                        Delete Account
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

DashboardOrg.propTypes = {
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
  DashboardOrg
);
