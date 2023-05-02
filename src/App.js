import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routess from './components/routing/Routess';
import About from './components/dashboard/About';
import Contact from './components/contactus/Contact';
import ReactNotifications from 'react-notifications-component';
// import Homepage from './Homepage';  

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
       <Switch>
        <Route exact path="/"  component={Landing} />
            <Route exact path = "/About" >
            <About />
            </Route>
			      <Route exact path = "/Contact" >
            <Contact />
            </Route>
            <Route component={Routess} />
       </Switch>
     </Router>






      {/* <Router>
      
         <Fragment>         
          <Routes>
            <Route exact path='/' component={<Landing />} />
            <Route path = "/About" component={<About />} >
            </Route>
			      <Route path = "/Contact"  component={<Contact />}>
            </Route>
            <Route component={<Routess />} />
          </Routes>
        </Fragment> 
      </Router> */}
    </Provider>
  );
};

export default App;
