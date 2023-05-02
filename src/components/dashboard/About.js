import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/aboutus.css';
import ishita from '../../img/Ishita.jpg';
import Kun from '../../img/Kun.jpg';
import Jeremy from '../../img/Jeremy.jpg';
import Nayeemullah from '../../img/Nayeemullah.jpg';
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect  to='/dashboard' />;
  }

  return (
    <section >
  <div className="container">
    <div className="row text-center">
      <div className="col-md-12">
        <h2>Meet The Team</h2>
        <h3 ></h3>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <div className="team-member">
            <figure>
                <img src={Jeremy} alt="" className="img-responsive"></img>
                <figcaption>
                  <p>Front end/Backend Developer</p>
                  
                </figcaption>
              </figure>
              <h4>Jeremy Sullivan</h4>
              <p>Front End/ Back-End Developer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
            <figure>
                <img src={ishita} alt="" className="img-responsive"></img>
                <figcaption>
                  <p>Front End/ Back-End Developer</p>
                  
                </figcaption>
              </figure>
              <h4>Ishita Kumar</h4>
              <p>Front End/ Back-End Developer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
            <figure>
                <img src={Kun} alt="" className="img-responsive"></img>
                <figcaption>
                  <p>Front End/ Back-End Developer</p>
                  
                </figcaption>
              </figure>
              <h4>Kun Wang</h4>
              <p>Front End/ Back-End Developer</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-member">
            <figure>
                <img src={Nayeemullah} alt="" className="img-responsive"></img>
                <figcaption>
                  <p>Front End/ Back-End Developer</p>
                  
                </figcaption>
              </figure>
              <h4>Nayeemullah Shaikh Baig</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
            
               

    
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
