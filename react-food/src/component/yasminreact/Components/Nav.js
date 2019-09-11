import React from "react";
import { Link } from 'react-router-dom';
export default function Nav() {
  
    
      return(
          <>

     {/* <img style={{ gridColumn:"1/2" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwQ9n4GM9XQv9s5Krl6jailV8jRVZgxwBtMbTkNMiKty0QT-X" /> */}
     <nav style={{  display:"flex", justifyContent:"space-around" }} >

     <ul style={{ backgroundColor:"grey", gridColumn:"2/4",width:"100%", display:"flex", justifyContent:"space-between", listStyle:"none", position:"relative" }} >
     <Link style={{ color:"white" }} to="/" ><li>Home</li> </Link> 
     || <Link style={{ color:"white" }} to="/About" > <li>About</li> </Link>  
     ||<Link style={{ color:"white" }} to="/Contact" ><li>Contact</li></Link> 
     {/* <li style= {{ display:"flex", justifyContent:"center", alignItems:"flex-end" }} ><h1>Your food is my food</h1></li> */}
     <h1 style= {{ display:"flex", alignItems:"flex-end" , justifyContent:"center" }}>your food is my food</h1>

     </ul>
     {/* <h1 style= {{ display:"flex", alignItems:"flex-end" }}>your food is my food</h1> */}


      </nav>
      </>
      ); 
    
  }
  
