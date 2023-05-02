import React, { Fragment, useState } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/buttons.css';
import '../../css/mockup.css';
import '../../css/landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from  '@fortawesome/free-brands-svg-icons';
import { faFacebook } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from  '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import ishita from '../../img/Ishita.jpg';
import { store } from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import 'animate.css'
import Footer from './Footer';
// import Parallax from 'react-simple-parallax';



const Landing = ({ isAuthenticated }) => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  if (isAuthenticated) {
    return <Redirect to='/landingpage' />;
  }
  const { name, email, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // console.log('SUCCESS');
    // console.log({type_of_user, name })
    e.preventDefault()
    console.log(formData);
    Landing({ name, email, message });
  };
  return (
 
        
    <section style={{padding:"0px"}}>
     
     
      {/* <button
        onClick={() => {
          store.addNotification({
            title: 'Dropbox',
            message: 'Files were synced',
            type: 'Warning',                         // 'default', 'success', 'info', 'warning'
            container: 'bottom-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000 
            }
          })
        }}
      >
        Add notification
      </button> */}
  
      {/* <div className='dark-overlay'>
        <div className='landing-inner'>
        <div className="row">
          
            <div  className='example_d'>
            <Link to='/register'>
              Sign Up
            </Link>
          
          </div>
       
<div className='example_d'> 
            <Link to='/login' >
              Login
            </Link>
            </div>
            </div>
</div>
        </div> */} 
        
        <div id="parallax-world-of-ugg">
  
 
  
  <section>
      <div className="parallax-one">
        <h2 style={{color:"white",marginBottom:'10px' }}>We're In, Are you?</h2>
         <div className= "row">
        <div  className='example_d'style={{textAlign:"center", backgroundColor:"lightblue"}}>
            <Link to='/register' >
              Sign Up
            </Link>
          
          </div>
       
<div className='example_q'style={{textAlign:"center", backgroundColor:"lightblue"}}>  
            <Link to='/login' >
              Login
            </Link>
            </div>
            </div>
      </div>
  </section>
  
  <section>
    <div >
      {/* <p><span className="first-character sc">I</span>Engage: </p> */} </div>
      <h2 style={{color:"black", marginTop:"20px"}}>Our Mission</h2>
<div className="container ">

  <div className="row">
    <article className="col-xs-4">
      <div className="cards1"><span className="glyphicon glyphicon-heart-empty icon"></span>
        <hr className="divider1"/>
        <h2 className="title1">Engage</h2>
        <div className="info1">
          <hr className="divider1"/>
          <p className="lead">Social interactions make us happier and increasing our social circle means that we're talking more and meeting different, interesting people, which hopefully means we're learning more, too. We offer a comfortable environment to  Find like minded people and Build a community</p>
        </div>
      </div>
    </article>
    <article className="col-xs-4">
      <div className="cards1"><span className="glyphicon glyphicon-globe icon"></span>
        <hr className="divider1"/>
        <h2 className="title1" style={{fontSize:"6.5rem"}} >Explore</h2>
        <div className="info1">
          <hr className="divider1"/>
          <p className="lead">You can stay in your little corner of the world, or you can experience millions of other ways to live. Truly authentic and unique experiences can open your mind to life’s endless possibilities. We thrive to find the best of the best right at your fingertips. ALl thats left to do is dive in.</p>
        </div>
      </div>
    </article>
    <article className="col-xs-4">
 
      <div className="cards1"><span className="glyphicon glyphicon-ok-sign icon"></span>
        <hr className="divider1"/>
        <h2 className="title1">Enable</h2>
        <div className="info1">
          <hr className="divider1"/>
          <p className="lead">No matter what kind of space you have or activities you'd like to offer,We cater to all your needs.  Earn while leading people on activities you love or simply list your space. We offer a secure space for you to be in f full control of your availability, prices, house rules, and how you interact with guests.  </p>
        </div>
      </div>
    </article>
  </div>
</div>
</section>
 
  
  <section>
    <div className="parallax-two">
      <h2>Find Your <Link to='/landingpage'>EVENT</Link></h2>
    </div>



  </section>
  
  <section>
    <div >
    <h4 style={{color:"black",textAlign:'center',fontSize:'35px'}}>Our Event Management Team</h4>
      <p><span className="first-character ny"></span></p>
      {/* <p className="line-break margin-top-10"></p> */}
      <p className="margin-top-10">  
      <div className="col-xl-3 col-sm-6 mb-5" style={{marginLeft:"150px",width:"250px",height:"150px" }}>
        <div className="bg-white rounded shadow-sm py-5 px-4" style={{borderRadius:"10px",border:"#17a2b8 solid 4px"}}><img src='https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/252837241_3229382987295377_3914416537535106457_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEUICPKoDWvOn1ynCb6rtlS3Wb4XjiupWPdZvheOK6lY1lYdMXviA-lDLUaH10F4vMJYwA0O7KlsCNntNWnwQqY&_nc_ohc=ZMeCKLqHTqEAX8A9Dce&_nc_zt=23&_nc_ht=scontent.fdac1-1.fna&oh=00_AfCwXnXgpaHuF5Faa81N8w2BhTPNYdOTm3ri2MXClq_FoQ&oe=64513F0E'  alt="" style={{marginLeft:"50px",backgroundColor:"#17a2b8 ",width:"100px",height:"100px" }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0"  style={{textAlign:"center" }}>Mozammel Hauqe</h5>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="list-inline-item"><a href="https://web.facebook.com/mojammel.haque.5264" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div className="bg-white rounded shadow-sm py-5 px-4" style={{border:"#17a2b8 solid 4px"}}><img src={ishita}  alt="" style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }}className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0"style={{textAlign:"center" }}>Ishita Kumar</h5>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div className="bg-white rounded shadow-sm py-5 px-4" style={{border:"#17a2b8 solid 4px"}}><img src='https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/67352878_1077035412686877_7202819365534695424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFr-GRZ4a-zx-NCII6w0ibnC55VVd_ggcwLnlVV3-CBzNFg2NLdzSdb0I5PUjq3gVvpKs6Is2BGxcoX0KCoecqe&_nc_ohc=_XQQ1XGKrBQAX9V8cfq&_nc_ht=scontent.fdac34-1.fna&oh=00_AfCnuGoRN-_xT8isFt32n6uKhcQlCPJU8Cn4mOnkd8pFpg&oe=647319FB'  alt=""  style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0" style={{textAlign:"center" }} >Mohammad Rony</h5>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="list-inline-item"><a href="https://web.facebook.com/mohammad.rony.92102" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div className="bg-white rounded shadow-sm py-5 px-4"style={{border:"#17a2b8 solid 4px"}}><img src='https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/342218577_1795767910839185_6824428558277288307_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeETWa4yOghMt9HAkb_W-EQK_Aa-_D46Fkf8Br78PjoWR-O0YSPGSMVZPeNh8Ji4FnUrTYolbIH_MxMeEgaJ0DZu&_nc_ohc=MoAlPPJ_sl4AX_3aG2x&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfBGZz-Dnm2p4It-hPAjsUMq165ft1J1TIRxjTHcYmLdng&oe=645068F3'  alt=""  style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0" style={{textAlign:"center" }}>Md Jubayar </h5>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item" ><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="list-inline-item"><a href="https://web.facebook.com/jobayeralam.rafi" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>
     </p>


     
    </div>
  </section>
  
  <section>
    <div className="parallax-three">
      <h2 className='text-danger'>Enjoy NSTU Event</h2>
    </div>
  </section>
  
  <section>
    <div className="block">
     <p>Are You In is a website that allows you to discover the best in events travel and food in Bloomington and nearby Indianapolis area. We strive to curate experiences that are worth your time and money , possibly something you’ve never tried before. We help you meet new people from your neighborhood, gather for brunches and book clubs.
Use our search tools to fin new friends. You can also publicly query for event of your liking and find people to hang out with, in this unsocial age, you can find your kind with the click of a button. The approach tends to the needs of venue owners looking to rent out their property, hosts looking to hold experiences and students looking to network or socialize.
</p>
      <p className="line-break margin-top-10"></p>
   <p style={{textAlign:"center", marginTop:"20px", fontSize:"20px"}}>For Any queries that you might have, feel free to get in touch with us!</p>
      <div className='formslayout2-inner'>
  <div>
  
  <div className="register" style={{ marginTop:"20px",marginLeft:"50px"}}> 
<div className="formulaire my-3 py-4"  >
  
      <form onSubmit={e => onSubmit(e)} >

{/* <p className='l arge text-primary' style={{textAlign:"center", color:"black"}}>Have any questions? We'll get back to you!</p> */}

      <input
  
        type='name'
        style={{ height: "35px", widht: "90%" }}
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => onChange(e)}
      />
  
      <input
        type='email'
        style={{ height: "35px", widht: "90%" , border:"none"}}
        placeholder='Email Address'
        name='email'
        value={email}
        onChange={e => onChange(e)}
      />

      <input
        type='message'
        style={{ height: "35px", widht: "90%" }}
        placeholder='Leave your Message Here  '
        name='message'
        value={message}
        onChange={e => onChange(e)}
      />
   
    <input type='submit' className='bouton' value='Submit' width='50%' style={{ border:"none", marginBottom:"20px", background:"lightblue"}}/>

      </form>
      </div>
		  </div>
</div>
</div>
    </div>
 </section>


       </div>



  <div className='mt-1'>
  <Footer></Footer>
  </div>




    </section > 
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
