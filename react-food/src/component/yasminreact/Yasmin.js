
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Components/Search'
import Nav from './Components/Nav'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

//////////ahmad
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";



export default class Yasmin extends Component {
    state = {};
  
    render() {
      return(
        // <>
      <Router  >

        <Nav/>

  <Route path="/" exact component={Home} />
  <Route path="/About"  component={About} />
  <Route path="/Contact"  component={Contact} />


{/* //////////////Ahmad */}
 <div className="App">
          <div className="App__Aside">
          </div>

          <div className="App__Form">
           

            <Route exact path="/" component={SignUp}></Route>
            <Route path="/sign-in" component={SignIn}></Route>
          </div>
        </div>






     
     </Router>
      // </>
      ); 
    }
  }
