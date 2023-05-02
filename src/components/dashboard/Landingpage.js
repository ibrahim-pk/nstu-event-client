import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style.css";
import "../../css/searchbar.css";
import "../../css/grid.css";
import "../../css/buttons.css";
import Carousel from "../layout/carousel.js";
import Carousel3 from "../layout/carouselbig";
import Snippet1 from "../../assets/snippet.png";
import Snippet2 from "../../assets/snippet2.png";
import Navbar from "../../components/layout/Navbar";
import party from '../../assets/party.png'
import villas from '../../assets/villaas.jpg'
import events from '../../assets/eventss.jpg'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'
import Footer from "../layout/Footer";
const imgArray = [party, pool, italy]


const Events = props => (
  <div className="small-card inline-div mx-1">
    <div className="main">
      <div className="card" style={{border:"none"}}>
        <div className="card_image" style={{border:"none"}}>
          <img src={Snippet1}></img>
        </div>
        <div className="card_content">
          <Link to={"/edit/" + props.events._id}>
            {" "}
            <h2 className="card_title">{props.events.name}</h2>
          </Link>
          {/* <p className="card_text">{props.events.location}</p> */}
          {/* <p className="card_text">{props.events.age}</p> */}
          <p></p>
        </div>
      </div>
    </div>
  </div>
);
const Bloomingtons = props => (
  <div className="small-card inline-div mx-1" style={{padding:"5px"}}>
    <div className="main" style={{height:"150px" ,width:"150px"}}>
      <div className="card" style={{height:"150px" ,width:"150px",border:"none"}}>
        <div className="card_image" style={{height:"150px" ,width:"150px",border:"none"}}>
          <img style={{height:"100px", width:"150px"}} src={imgArray[Math.floor((Math.random() * 2) )]}></img>
        </div>
        <div className="card_content" style={{height:"70px",width:"150px",backgroundColor:"lightblue"}}>
          <Link to={"/edit/" + props.Bloomington._id}>
            {" "}
            <p className="card_title">{props.Bloomington.name}</p>
          </Link>
          {/* <p className="card_text">{props.Bloomington.location}</p> */}
          {/* <p className="card_text">{props.Bloomington.age}</p> */}
          <p></p>
        </div>
      </div>
    </div>
  </div>
);
const Venues = props => (
  <div className="small-card inline-div mx-5">
    <div className="main">
      <div className="card">
        <div className="card_image">
          <img src={Snippet2} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{props.event.name}</h2>
          <p className="card_text">{props.event.location}</p>
          <p className="card_text">{props.event.age}</p>
          <button className="example_dsearch">
            {" "}
            <Link to={"/edits/" + props.event._id}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      events: [],
      Bloomington: [],
      location: "Bloomington"
    };
    this.searchfilter2 = this.searchfilter2.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/auth/show")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
      axios
      .put("http://localhost:5000/api/auth/locationbloomington", {
        location: "Bloomington"
      })
      .then(response => {
        this.setState({ Bloomington: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/api/auth/venues")
      .then(response => {
        this.setState({ event: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/auth/locations")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchh(e) {
    // console.log(e.target.value)
    this.setState({ searchme: e.target.value });
  }

  searchfilter2(e) {
    this.setState({ location: this.state.location });
    console.log(this.state.location);
    axios
      .put("http://localhost:5000/api/auth/locations", {
        location: this.state.location
      })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  exerciseListb() {
    return this.state.Bloomington.map(currentexercise => {
      return <Bloomingtons Bloomington={currentexercise} key={currentexercise._id} />;
    });
  }
  exerciseList() {
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id} />;
    });
  }

  exerciseLists() {
    return this.state.event.map(currentexercise => {
      return <Venues event={currentexercise} key={currentexercise._id} />;
    });
  }
  exerciseListss() {
    return this.state.event.map(currentexercise => {
      return <Events event={currentexercise} key={currentexercise._id} />;
    });
  }

  render() {
    return (
   <div style={{backgroundColor:"#EFF9FC"}}>
        <Navbar></Navbar>
        <div style={{marginTop:"30px"}}>
          <Carousel3 ></Carousel3>
          <div className="container my-5 text-center">
          
          
                  <div className="card my-5" style={{marginLeft:"200px",backgroundColor:"E9E9E9",borderRadius:"16px"}} >
                  <Link to='/SearchEvents' style={{color:"black"}}>
                      <div className="card-horizontal" style={{  display: "flex",flex: "1 1 auto"}}>
                          <div className="img-square-wrapper">
                              <img className="" src='https://confmiet.org/assets/img/slider/rsz_11.jpg' style={{ borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px", width:"300px",height:"200px", boxShadow: "0 20px 40px -14px rgba(0, 0, 0, 0.25)"}}alt="Card image cap"/>
                          </div>

                          <div className="card-body">
                              <p className="card-text" style={{padding:"30px"}}>NSTU Events</p>
                          </div>
                        
                      </div>
                      </Link>
                      </div>
                  
        
            </div>
          </div>
           <div className='mt-5 mb-0'>
             <Footer></Footer>
            </div>
         
   </div>

     
    );
  }
}
