import React from 'react';

const Footer = () => {
    return (
         <footer className="page-footer font-small unique-color-dark">



        <div className="container text-center text-md-left mt-5">
        
          
          <div className="row">
        
        
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
        
              <h6 className="text-uppercase font-weight-bold font-color white" style={{color:"white"}}>NSTU EVENT</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p style={{color:"white"}}>You can see all event in NSTU. You can attend here easily.</p>
        
            </div>
        
        
            
        
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
        
              <h6 style={{color:"white"}}className="text-uppercase font-weight-bold">Useful links</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p style={{color:"white"}}>
                <a style={{color:"white"}} href="/terms">Policies</a>
              </p>
              <p>
                <a  style={{color:"white"}} href="/faqs">FAQ's</a>
              </p>
              <p>
                <a  style={{color:"white"}} href="/login">Login</a>
              </p>
              <p>
                <a  style={{color:"white"}} href="/register">Register</a>
              </p>
        
            </div>
        
        
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
              
              <h6 style={{color:"white"}}className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              < p style={{color:"white"}}>
                <i style={{color:"white"}} className="fas fa-home mr-3"></i>NSTU,Sonapur-maijdee,Noakhali-3800</p>
              <p style={{color:"white"}}>
                <i style={{color:"white"}}className="fas fa-envelope mr-3"></i>nstu@gmail.com</p>
              <p style={{color:"white"}}>
                <i style={{color:"white"}}className="fas fa-phone mr-3"></i> +1 812 369 3488</p>
            
        
            </div>
            
        
          </div>
        
        
        </div>
        
        
        
        </footer>
    );
};

export default Footer;