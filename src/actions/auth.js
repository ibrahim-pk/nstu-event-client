import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  const userDetails=JSON.parse(localStorage.getItem('UserInfo'))
  try {
    if(userDetails){
      const res = await axios.post(`http://localhost:5000/api/auth/info`,{
        email:userDetails.email
      });

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }
   
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password,question1,type_of_user,answer1,question2,answer2 }) => async dispatch => {
 

  try {
    const res = await axios.post('http://localhost:5000/api/users',{ name, email, password,question1,type_of_user,question2,answer1,answer2 });
    console.log(res.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  console.log(email)
  try {
    const res = await axios.post('http://localhost:5000/api/auth',{ email, password });
    console.log(res)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors)
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
