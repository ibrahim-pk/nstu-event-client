import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { SearchEvents } from "../dashboard/SearchEvents";
import { SearchPeople } from "../dashboard/SearchPeople";
import { Contact } from "../contactus/Contact";
import logo from "../../img/looog.png";
import "../../css/navbar.css";
// import terms from "../termsandpolicy";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const organizerLinks = (
    <ul>
      <li>
        <Link to="/posts">PlayGround</Link>
      </li>
      <li>
      <Link to='/chatscreen'>
          {/* <i className='fas fa-user' />{' '} */}
          <span className='hide-sm'>Chat</span>
        </Link>
        </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          style={{zIndex:"999"}}
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-bars"></i>
        </a>
        <div
          className="dropdown-menu u dropdown-menu-right bg-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <Link to="/dashboardOrg">
              <span className="hide-sm">My Profile</span>
            </Link>
          </li>
          <li>
            <a>
              <Link to="/faqs">FAQ</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/terms" style={{zIndex:"999"}}>Terms</Link>
            </a>
          </li>

          <li style={{zIndex:"999"}}>
            <a
              className="dropdown-item navbar-dowpdown-a"
              onClick={logout}
              href="#!"
            >
              <span className="hide-sm">Logout</span>
            </a>
          </li>
        </div>
      </li>
    </ul>
  );
  const authLinks = (
    <ul>
      <li>
        <Link to="/posts">PlayGround</Link>
      </li>

      
      <li>
        <Link to="/landingpage">
          {/* <i className='fas fa-user' />{' '} */}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>

     
     
      <li>
        <Link to="/dashboard">
          {/* <i className='fas fa-user' />{' '} */}
          <span className="hide-sm">Profile</span>
        </Link>
      </li>

     
      <li className="nav-item dropdown">
        <a
        style={{zIndex:"1000", marginTop:"-5px"}}
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        Discover
        </a>
        <div
          className="dropdown-menu u dropdown-menu-right bg-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
           <li>
        <Link to='/SearchEvents'>
          {/* <i className='fas fa-user' />{' '} */}
          <span className="hide-sm">Events</span>
        </Link>
          </li>
     <li>
        <Link to='/chatscreen'>
          {/* <i className='fas fa-user' />{' '} */}
          <span className='hide-sm'>Chat</span>
        </Link>
     </li>
     
   

          <li>
          <Link to="/SearchPeople">
          <span className="hide-sm">Around You</span>
        </Link>
          </li>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-bars"></i>
        </a>
        <div
          className="dropdown-menu u dropdown-menu-right bg-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
          <a className="dropdown-item navbar-dowpdown-a" onClick={logout} href="#!">
            <span className="hide-sm">Logout</span>
          </a>
          </li>
          <li>
          <Link to="/dashboard">
            <span className="hide-sm">My Profile</span>
          </Link>
          </li>
          <li>
            <a>
              <Link to="/faqs">FAQ</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/terms">Terms</Link>
            </a>
          </li>
        </div>
      </li>

    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/"> </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar-my pt-2" >
      {
        <a  className="img-responsive navbar-brand" href="#">

          <Link to="/">
            NSTU EVENT
           
          </Link>
        </a>
      }

      {!loading && (
        // <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        <Fragment>
          {isAuthenticated
            ? localStorage.type_of_user == "Organizer"
              ? organizerLinks
              : authLinks
            : guestLinks}
        </Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
