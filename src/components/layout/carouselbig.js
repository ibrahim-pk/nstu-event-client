import Slider from "react-slick";
import React, { Component } from "react";   

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div className="caro1">
       
          <Slider {...settings}>
          <div>
            <img
                                src='https://confmiet.org/assets/img/slider/rsz_11.jpg'
                                style={{width:"600px",borderRadius:"20px",marginLeft:"20px",padding:"10px" ,marginRight:"20px", objectFit: 'cover',borderRadius:"10px", zIndex:'-1'}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                 src='https://bangladeshpost.net/webroot/uploads/featureimage/2022-12/639c898152a62.jpg'
                                style={{width:"600px",borderRadius:"20px",marginLeft:"20px",padding:"10px",marginRight:"20px", objectFit: 'cover',borderRadius:"10px", zIndex:'-1'}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src='https://dailyasianage.com/library/1543255580_2.jpg'
                                style={{width:"600px",borderRadius:"20px",marginLeft:"20px",padding:"10px" ,marginRight:"20px", objectFit: 'cover',borderRadius:"10px", zIndex:'-1'}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCpCw9UWzzDCNtsznu77eB_aZO23OyVPIkA&usqp=CAU'
                                style={{width:"600px",borderRadius:"20px",marginLeft:"20px",padding:"10px" ,marginRight:"20px", objectFit: 'cover',borderRadius:"10px", zIndex:'-1'}}
                                alt="..."
                              />
            </div>
            
          
           
           
            <div>

            </div>
          
          </Slider>
        </div>
      );
    }
  }