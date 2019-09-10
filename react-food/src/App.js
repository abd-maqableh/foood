
import React, { Component } from "react";
import axios from "axios";
import Abdalla from './component/Abdallareact/Abdalla';
import Ahmad from './component/Ahmadreact/Ahmad';
import Haya from './component/Hayareact/Haya';
import Yasmin from './component/yasminreact/Yasmin';

//import {Router, Route, browserHistory} from 'react-router-dom'

export default class App extends Component {
    state = {};
  
    render() {
      return(
     <>

        
     {/* <Router> */}
<Yasmin/>
      {/* </Router> */}
      </>
      ); 
    }
  }
  
