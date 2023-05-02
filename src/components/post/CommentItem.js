import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import duck from "../../img/duck.jpg";
import wolf from "../../img/wolf.png";
import panda from "../../img/panda.png";
const imgArray = [panda, duck,wolf]
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog } from   '@fortawesome/free-solid-svg-icons';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
   
  <div className="container">

<div className="message-container" style={{border: "1px solid #EFF9FC", borderRadius: "5px", backgroundColor:"#ccf5ff  "}}>
    <div className="status-bar" style={{padding:"2px", marginTop:"2px"}}>
    <h2 className="my-0">

      <div className="message-content">
     
     <div className="message-header">
       <div className="header-image">
       <img src={avatar} width="40" alt="duck" title="duck" />
       </div>
       <div className="header-info">
         <div className="user-details">
           <div className="user-top">
             <a className="user-name" href="#" >   <Link to={`/profile/${user}`}>
       
       <h4>{name}</h4>
     </Link></a>
     
           </div>
           <div className="user-bottom">
           
           </div>
         </div>
         <div className="message-details">
           
           <div className="message-date" style={{color:"black", border:"none"}}>
             {/* <span>  Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></span> */}
           </div>
           {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deleteComment(postId, _id)}
              type='button'
              
              
            >
             X
            </button>
          )}
         </div>
       </div>
     </div>
    
     <div className="message-content-body" style={{padding:"20px", color:"black"}}>
       <p>
       {text}
       </p>
     </div>
   </div>
    
        
      
       
       </h2>
    </div>
    </div>

  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
